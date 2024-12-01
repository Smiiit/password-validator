import React from 'react'
import zxcvbn from 'zxcvbn'

const PasswordValidater = ({password}) => {
  const testResult = zxcvbn(password);
  const num = testResult.score * 100/4;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return 'Week';
      case 1:
        return 'Good';
      case 2:
        return 'Very Good';
      case 3:
        return 'Strong';
      case 4:
        return 'Excellent';
      default:
        return 'none';
    }

  }

  const functionProgreesColor = () =>{
    switch (testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#66ff66';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  }


    const changePasswordColor = () => ({         // this is arrow function created for the color 

            width: `${num}%`,
            background: functionProgreesColor(),
            heigth: '0.2%'
        
        })

  return (

    <>
        <div className="progress" style={ {heigth: '2%'}}>
            <div className="progress-bar" style={changePasswordColor()}></div>
        </div>

        <p className= " fs-3 float-end  mx-auto  "  style={{ color : functionProgreesColor()}}>{createPassLabel()}</p>   
    </>
  )
}

export default PasswordValidater
