import {CgSpinnerTwo} from 'react-icons/cg'
const Splash =  () =>{
  return(
      <div className="splash-con">
        <div className="splash">
          <h3>TrapTV</h3>
          <p>Loading <CgSpinnerTwo className="spinner"/> </p>
        </div>
      </div>
  )
}
export default Splash
