import React , { Component } from 'react';
import Modal from 'react-awesome-modal';
import images from "./images.png";
import './css/bootstrap.css';


class Header extends Component{ 


  constructor(props) {
    super(props);
    this.state = {
        visible : false
    }
}

openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}
    render() {
        return (
            <div className="overall">
                <div className="navbar navbar-dafault" role="navigation">
                        <div className="container">
                       < div className="row"><h>Namis</h></div>
                        
                                
                                
                                <div className="row">
                                     <input type ="text"  id="form-elem-1" name ="search" placeholder= "search apps"/>
                                           <button type = "button" className= "btn btn-info" > MORE APPS</button>
                                           <button  className= "btn btn-outline-dark btn-sm" onClick={() => this.openModal()} name="reset"><img src={images} alt="nortifications"/></button>
                                           <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <h1>Nortifications</h1>
            <p>No active enrollments exists</p><br></br>
            <p>No feehdback exists</p><br></br>
            <p>No relationship exists</p><br></br>
            <p>No indicatorts exists</p><br></br>
            
            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
          </Modal>

                                           

                        </div>
                </div>
            </div>  
            </div>          
                        
        );
    }
}
export default Header;
