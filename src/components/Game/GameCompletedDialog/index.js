// import React from 'react';
// import Dialog from '../Dialog';
// import '../../App.css';



// class GameCompletedDialog extends React.Component{
//     constructor(){
//         super()
//         this.state={username: null}
//         this.setUsername = this.setUsername.bind(this);
//         this.saveGameDialog = this.saveGameDialog.bind(this);
//     }

//     render(){
//         let game = this.props.game;
//         let title = (game.gameResult.isWinner)? "You Win!" : "You lose!";

//         return(
//                 <Dialog>
//                     <div className='modal-content'>
//                         <h1> {title} </h1>
//                         {this.saveGameDialog(game)}
//                         <button className='btn' onClick={()=>this.props.processGame(this.state.username, game)}> ok </button>
//                     </div>
//                 </Dialog>
//         );
//     }

//     saveGameDialog(game){
//         if(!game.gameResult.isWinner){return;}
//         return(
//             //<h1> {title} </h1>
//             <div>
//                 <label htmlFor='username'> username: </label>
//                 <input onChange={(e)=>this.setUsername(e)} name='username' type='text' />
//             </div>
//         );
    
//     }

//     setUsername(e){
//         let name = e.target.value;
//         this.setState({username: name});
//     }
// }



// export default GameCompletedDialog;
