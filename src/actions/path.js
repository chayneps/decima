import {createActions} from 'reduxaga';


const pathActions =  createActions({

  nameSpace: "PATH",



  actions: {

    doLogin: {
      sagaFn: function* doLogin(action){

        console.log("Before PATH:Login");

      }

    },
  }

});

export default pathActions;

