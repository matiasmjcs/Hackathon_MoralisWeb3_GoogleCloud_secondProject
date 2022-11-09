// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

library TimestampHelper {
    uint constant SECONDS_PER_DAY = 24 * 60 * 60;
    uint constant SECONDS_PER_HOUR = 60 * 60;

    function getHour(uint timestamp) internal pure returns (uint hour) {
        uint secs = timestamp % SECONDS_PER_DAY;
        hour = secs / SECONDS_PER_HOUR;
    }
}

contract vehicleRegister {

    // strcut for each vehicle
    struct vehicle {
        string patent;
        address owner;
        string brand;
        string date;
        uint time;
        uint yearVehicle;
        address[] ownerHistory;
        bytes32[] maintenanceHistory;
    }

    // event for when a new vehicle is registered
    event newVehicle(
        string patent,
        address owner,
        string brand,
        string date,
        uint time,
        uint year,
        address[] ownerHistory,
        bytes32[] maintenanceHistory
    );

    // strcut for each vehicle
    struct maintenance {
        string date;
        uint time;
        string direction;
        bytes32 ID;
        string description;
        address owner;
    }

    // event for each maintenance performed
    event newMaintenance (
        string date,
        uint time,
        string direction,
        bytes32 ID,
        string description,
        address owner
    );

    event newOwner(
        address newOwner
    );

    // mapping to visualize a vehicle
    mapping(string => vehicle ) public viewVehicle;

    // mapping to visualize a maintenance
    mapping(bytes32 => maintenance ) public viewMaintenance;


    // function to register a vehicle
    function RegisterNewVehicle(string memory _patent, string memory _brand, string memory _date, uint _year) public {
        address[] memory _ownerHistory;
        bytes32[] memory _maintenanceHistory;
        uint _time = TimestampHelper.getHour(block.timestamp);
        viewVehicle[_patent] = vehicle(_patent, msg.sender, _brand, _date, _time, _year, _ownerHistory, _maintenanceHistory);
        emit newVehicle(_patent, msg.sender, _brand, _date, _time, _year, _ownerHistory, _maintenanceHistory);
    } 

    // function to assign a new owner to a vehicle
    function newOwnerVehicle(address _newOwner,string memory _patent) public {
        vehicle storage _vehicle = viewVehicle[_patent];
        require( _vehicle.owner == msg.sender);
        _vehicle.owner = _newOwner;
        _vehicle.ownerHistory.push(msg.sender);
        _vehicle.ownerHistory.push(_newOwner);
        viewVehicle[_patent] = _vehicle;
        emit newOwner(_newOwner);
    }

    // function to register maintenance
    function registerMaintenance(string memory _patent, string memory _date, string memory _direction, string memory _description ) public {
        vehicle storage _vehicle = viewVehicle[_patent];
        require( _vehicle.owner == msg.sender);
        uint _time = TimestampHelper.getHour(block.timestamp);
        bytes32 _ID = keccak256(abi.encodePacked(_patent, _date, _direction, _description ));
        _vehicle.maintenanceHistory.push( _ID);
        viewMaintenance[_ID] = maintenance(_date, _time, _direction, _ID, _direction, msg.sender);
        emit newMaintenance(_date, _time, _direction, _ID, _direction, msg.sender);     
    }

    // function to return maintenance history
    function returnMaintenance(string memory _patent) public view returns(bytes32[] memory) {
        vehicle storage _vehicle = viewVehicle[_patent];
        bytes32[] storage _maintenanceHistory = _vehicle.maintenanceHistory;
        return _maintenanceHistory;
    }

    // function to return history of vehicle owners
     function returnOwners(string memory _patent) public view returns(address[] memory) {
        vehicle storage _vehicle = viewVehicle[_patent];
        address[] storage _ownerHistory = _vehicle.ownerHistory;
        return _ownerHistory;
    }

}