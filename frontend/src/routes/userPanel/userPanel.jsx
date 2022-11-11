import React, {useState} from 'react'
import './userPanel.css'
import Button from '../../components/button1/button'
import RegisterVehicle from '../../components/registerVehicle/RegisterVehicle'
import ViewVehicle from '../../components/viewVehicle/ViewVehicle'
import TransferVehicle from '../../components/transferVehicle/TransferVehicle'
import OwnerHistory from '../../components/ownerHistory/OwnerHistory'
import RegisterUser from '../../components/RegisterUser/RegisterUser'
import ViewUser from '../../components/ViewUser/ViewUser'
import SeeSatisfied from '../../components/seeSatisfied/SeeSatisfied'
import SeeDissatisfied from '../../components/SeeDissatisfied/SeeDissatisfied'
import ReportUser from '../../components/reportUser/ReportUser'
import Congratulate from '../../components/congratulate/Congratulate'
import RegisterMaintenance from '../../components/RegisterMaintenance/RegisterMaintenance'
import ViewMaitenance from '../../components/viewMaitenance/ViewMaitenance'
import MaitenanceHistory from '../../components/maitenanceHistory/MaitenanceHistory'

const UserPanel = () => {

    const [registerVehicle, setRegisterVehicle] = useState(false)
    const [viewVehicle, setViewVehicle] = useState(false)
    const [transferVehicle, settransferVehicle] = useState(false)
    const [ownerHistory, setOwnerHistory] = useState(false)
    const [registerUser, setregisterUser] = useState(false)
    const [viewUser, setViewUser] = useState(false)
    const [seeSatisfied, setSeeSatisfied] = useState(false)
    const [seeDissatisfied, setSeeDissatisfied] = useState(false)
    const [reportUser, setReportUser] = useState(false)
    const [congratulate, setCongratulate] = useState(false)
    const [registerMaintenance, setRegisterMaintenance] = useState(false)
    const [viewMaintenance, setViewMaintenance] = useState(false)
    const [maintenanceHistory, setMaintenanceHistory] = useState(false)

    // Register vehicle
    const openRegisterVehicle = () => {
        setRegisterVehicle(true)
    }

    const closeRegisterVehicle = () => {
        setRegisterVehicle(false)
    }

    // view vehicle
    const openViewVehicle = () => {
        setViewVehicle(true)
    }

    const closeViewVehicle = () => {
        setViewVehicle(false)
    }

    // transfer vehicle
    const openTransferVehicle = () => {
        settransferVehicle(true)
    }

    const closeTransferVehicle = () => {
        settransferVehicle(false)
    }

    // owner history
    const openOwnerHistory = () => {
        setOwnerHistory(true)
    }

    const closeOwnerHistory = () => {
        setOwnerHistory(false)
    }

    // register user
    const openRegisterUser = () => {
        setregisterUser(true)
    }

    const closeRegisterUser = () => {
        setregisterUser(false)
    }

    // view user
    const openViewUser = () => {
        setViewUser(true)
    }

    const closeViewUser = () => {
        setViewUser(false)
    }

    // view Satisfied
    const openSeeSatisfied = () => {
        setSeeSatisfied(true)
    }

    const closeSeeSatisfied = () => {
        setSeeSatisfied(false)
    }

    // view Dissatisfied
    const openSeeDissatisfied = () => {
        setSeeDissatisfied(true)
    }

    const CloseSeeDissatisfied = () => {
        setSeeDissatisfied(false)
    }

    // report user
    const openReportUser = () => {
        setReportUser(true)
    }

    const CloseReportUser = () => {
        setReportUser(false)
    }

    // congratulate user
    const openCongratulate = () => {
        setCongratulate(true)
    }

    const CloseCongratulate = () => {
        setCongratulate(false)
    }

    // register maintenance
    const openRegisterMaintenance = () => {
        setRegisterMaintenance(true)
    }

    const CloseRegisterMaintenance = () => {
        setRegisterMaintenance(false)
    }

    // view maintenance
    const openViewMaintenance = () => {
        setViewMaintenance(true)
    }

    const CloseViewMaintenance = () => {
        setViewMaintenance(false)
    }

    // view maintenance
    const openMaintenanceHistory = () => {
        setMaintenanceHistory(true)
    }

    const CloseMaintenanceHistory = () => {
        setMaintenanceHistory(false)
    }
    

  return (
    <div className='userPanel'>

        <h2 className='userPanel__h2'>Vehicle</h2>
          <div className='userPanel__vehicle'>
              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">register vehicle </h3>
                  <p className="userPanel__parrafo">once registered, you can search for it by its license plate</p>
                  <Button text='Register' onclick={openRegisterVehicle} />
              </div>
              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">transfer vehicle</h3>
                  <p className="userPanel__parrafo">You only need the address of the new owner and the license plate of the vehicle</p>
                  <Button text='transfer' onclick={openTransferVehicle} /> 
              </div>
              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">see vehicle</h3>
                  <p className="userPanel__parrafo">see vehicle by its license plate</p>
                  <Button onclick={openViewVehicle} text='see vehicle' />
              </div>
              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">view vehicle ownership history</h3>
                  <p className="userPanel__parrafo">check the history of owners of a vehicle with its license plate</p>
                  <Button onclick={openOwnerHistory} text='view history' />
              </div>
          </div>

          <h2 className='userPanel__h2'>User</h2>


          <div className='userPanel__user'>
              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">register user </h3>
                  <p className="userPanel__parrafo">register as a user to offer more transparency with your future partners</p>
                  <Button text='Register' onclick={openRegisterUser} />
              </div>

              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">View user </h3>
                  <p className="userPanel__parrafo">view user by address</p>
                  <Button text='view' onclick={openViewUser} />
              </div>

              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">see satisfied customers</h3>
                  <p className="userPanel__parrafo">see if a user has satisfied customers</p>
                  <Button text='View' onclick={openSeeSatisfied} />
              </div>
              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">see dissatisfied customers</h3>
                  <p className="userPanel__parrafo">check if a user has a history of dissatisfied customers</p>
                  <Button onclick={openSeeDissatisfied} text='View' />
              </div>
              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">report a user who was unfair</h3>
                  <p className="userPanel__parrafo">It will be added to the user's information so that others can know that it is unfair</p>
                  <Button onclick={openReportUser} text='report' />
              </div>

              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">congratulate a good partner</h3>
                  <p className="userPanel__parrafo">this will appear in the user information so that other people know that they are a good partner</p>
                  <Button onclick={openCongratulate} text='congratulate' />
              </div>

          </div>

          <h2 className='userPanel__h2'>Maintenance</h2>



          <div className='userPanel__maintenance'>
              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">register maintenance </h3>
                  <p className="userPanel__parrafo">register a maintenance to your vehicle</p>
                  <Button text='Register' onclick={openRegisterMaintenance} />
              </div>
              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">view maintenance</h3>
                  <p className="userPanel__parrafo">see maintenance by your identification number</p>
                  <Button text='view' onclick={openViewMaintenance} />
              </div>
              <div className="userPanel__box">
                  <h3 className="userPanel_titulo">view maintenance history</h3>
                  <p className="userPanel__parrafo">view maintenance history</p>
                  <Button onclick={openMaintenanceHistory} text='view' />
              </div>
          </div>
          {registerVehicle && <RegisterVehicle close={closeRegisterVehicle} />}
          {viewVehicle && <ViewVehicle close={closeViewVehicle} />}
          {transferVehicle && <TransferVehicle close={closeTransferVehicle} />}
          {ownerHistory && <OwnerHistory close={closeOwnerHistory} />}
          {registerUser && <RegisterUser close={closeRegisterUser} />}
          {viewUser && <ViewUser close={closeViewUser} />}
          {seeSatisfied && <SeeSatisfied close={closeSeeSatisfied} />}
          {seeDissatisfied && <SeeDissatisfied close={CloseSeeDissatisfied} />}
          {reportUser && <ReportUser close={CloseReportUser} />}
          {congratulate && <Congratulate close={CloseCongratulate} />}
          {registerMaintenance && <RegisterMaintenance close={CloseRegisterMaintenance} />}
          {viewMaintenance && <ViewMaitenance close={CloseViewMaintenance} />}
          {maintenanceHistory && <MaitenanceHistory close={CloseMaintenanceHistory} />}
    </div>
    
  )
    

}

export default UserPanel