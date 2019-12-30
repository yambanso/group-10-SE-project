import React , { Component } from 'react';
import back from "./back.png";
import forward from "./forward.png";
import warning from "./warning.png";
import pin from "./pin.jpg";
import settings from "./settings.png";
import notes from "./notes.png";
import './css/bootstrap.css';
import Modal from 'react-awesome-modal';

class Body extends Component{ 

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
                 
                        <div className="navbar navbar-default" role="navigation">
                            <div className="container">
                                
                                    <div className="row">
                                        <button  className= "btn btn-outline-dark btn-sm    " name="back">BACK</button>
                                        <button  className= "btn btn-outline-dark btn-sm    " name="prev"><img src={back}   alt="back"/></button>
                                        <button  className= "btn btn-outline-dark btn-sm    " name="forward"><img src={forward} alt="forward"/></button>
                                         <input type ="text" id="form-elem-1" placeholder= "Household registration"/>
                                        

                                    </div>

                                    <div className="row">
                                        <button  className= "btn btn-outline-dark btn-sm    " ><img src={pin} alt="pin"/></button>
                                        <button type= "Submit" className= "btn btn-danger btn-sm" ><img src={warning} alt="warning"/></button>
                                        <button  className= "btn btn-outline-dark btn-sm    " ><img src={settings} alt="seting"/></button>
                                    
                                        

                                    </div>
                                    

                            </div>
                        </div>
                                                
                    
                    <div className ="container">
                            <div className="row">
                                                                        
                                                                        <div className="col-lg-12">
                                                                                            <div className ="container">
                                                                                                   <div className = "card">
                                                                                                       
                                                                                                        
                                                                                                        <div className="card-header"><div className ="row">
                                                                                                        <div className ="col"><h>SELECTED PROGRAM                                                 </h></div>
                                                                                                        <button  className= "btn  btn-sm" onClick={() => this.openModal()} ><img src={notes} alt="notes"/></button>
                                                                                                        <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                                                                                                                                                                                    
                                                                                                                <h1 >NOTES</h1>
                                                                                                                <form className="form-group">
                                                                                                                <div className="col-lg-12">
                                                                                                                <input  type="textarea" name='NOTES' className="form-control" /></div>

                                                                                                        
                                                                                                            <div className ="row">
                                                                                                                <div className= "col-lg-8">
                                                                                                            <button type = "submit" className= "btn btn-info" > ADD</button></div>
                                                                                                            <button type="reset" className= "btn btn-outline-dark btn-sm" name="back">clear</button>
                                                                                                            </div> 
                                                                                                            
                                                                                                            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                                                                                                                </form>
                                                                                                                
                                                                                                      </Modal>


                                                                                                        </div>
                                                                                                        </div>
                                                                                                        <div className="card-body">
                                                                                                        <form action ="" role="form">
                                                                                                            <div className="form-group">
                                                                                                            <label>
                                                                                                            Enrolling organization unit  </label><br></br>
                                                                                                            <input type= "text" className="form-control" id="form-elem-1" name="orgUnit" placeholder="please enter organization unit"/><br></br>
                                                                                                            <label>Start date</label> <br></br>
                                                                                                            <input type= "date" className="form-control"  name="srtDay" placeholder="please enter starting date"/><br></br>
                                                                                                            <label>End date</label><br></br>
                                                                                                            <input type= "date" className="form-control" name="endDay"id="form-elem-1" placeholder="please enter ending date"/><br></br>
                                                                                                                </div>
                                                                                                        </form>
                                                                                                        </div>
                                                                                                    

                                                                                                    

                                                                                                    
                                                                                                            
                                                                                                    
                                                                                                    </div>
                                                                                            </div>

                                                                                            <div className ="container">
                                                                        <div className ="card">
                                                                               <div className="card-header"> profile </div>
                                                                                <div className="card-body">
                                                                                <form>
                                                                                            Household name <br></br>
                                                                                            <input type= "text" className="form-control" name="houseName" placeholder ="enter household name"/><br></br>
                                                                                            Household Coordinates <br></br>
                                                                                            <div className="container">
                                                                                            <div className="row">
                                                                                            <input type= "text" className="form-control" name="longitudes" placeholder ="longitudes"/>
                                                                                            <input type= "text" className="form-control" name="latittudes" placeholder ="latittudes"/>
                                                                                            </div>
                                                                                            </div>

                                                                                    </form>
                                                                                </div>
                                                                                </div>
                                                                   
                                                                                    
                                                                                  
                                                                        </div>
                                                                        
                                                                                            
                                                                                            <div className ="card">
                                                                                                        <div className="card-header">Timeline Data entry</div>

                                                                                                        <div className="card-body">
                                                                                                           <div className="container">
                                                                                                                <div className="row">
                                                                                                                Report date* <br></br>
                                                                                                                <input type ="date" className="form-control"  name ="Rdate" placeholder= "Report date"/>
                                                                                                                
                                                                                                                Due date* <br></br>
                                                                                                                <input type ="date" className="form-control" name ="Due date" placeholder= "Due date"/><br></br></div>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                        

                                                                                                        <div className ="card">
                                                                                                                <div className="card-hearder">Household details</div> 
                                                                                                                <div className ="card-body">
                                                                                                                 Name of Household head <br></br>
                                                                                                                 
                                                                                                                <input type ="text" className="form-control" id="form-elem-1" name ="HHhead" placeholder= "enter Household head"/><br></br>
                                                                                                                Name of Spouse <br></br>
                                                                                                                <input type ="text" className="form-control" name ="Spouse" placeholder= "enter Name of spouse"/><br></br>
                                                                                                                Household National identity Number <br></br>
                                                                                                                <input type ="text" className="form-control" id="form-elem-1" name ="Idnumber" placeholder= "enter Household National identity number"/><br></br>
                                                                                                                Spouse national identity number <br></br>
                                                                                                                <input type ="text" className="form-control" id="form-elem-1" name ="sid" placeholder= "enter Spouse identity number"/><br></br>
                                                                                                                Sex of Household head <br></br>
                                                                                                                <select className="form-control" name="sex of household head">
                                                                                                                <option value="male">male</option>
                                                                                                                <option value="female">female</option>
                                                                                                                </select><br></br>
                                                                                                            
                                                                                                                Sex of Spouse <br></br>
                                                                                                                <select className="form-control" name="sex of spouse">
                                                                                                                <option value="male">male</option>
                                                                                                                <option value="female">female</option>
                                                                                                                </select><br></br>

                                                                                                        </div>
                                                                                                        

                                                                                                        <div className= "row">
                                                                                                                <div className="col-lg-8">
                                                                                                                <button type= "Submit" className= "btn btn-success btn-sm" name="submit">Complete</button>
                                                                                                                
                                                                                                                <button type= "Submit" className= "btn btn-warning btn-sm" name="Deactivate">Deactivate</button>
                                                                                                                <button  className= "btn btn-outline-dark btn-sm    " name="reset"><img src={warning} alt="warning"/></button>
                                                                                                                </div>
                                                                                                                <button type= "Submit" className= "btn btn-danger btn-sm" name="Delete">Delete</button><br></br>
                                                                                                                </div>

                                                                                                                </div>
                                                                                                              


                                                                                                        

                                                                                            

                                                                                </div>

                              

            </div>
            </div>
            </div>
            

        );
    }
}
export default Body;