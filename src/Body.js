import React , { Component } from 'react';
import './css/bootstrap.css';


class Body extends Component{ 
    render() {
        return (
            <div className="overall">
                <div className="navbar navbar-dafault" role="navigation">
                        <div className="container">
                       < div className="row"><h>Namis</h></div>
                        
                                
                                
                                <div className="row">
                                     <input type ="text"  id="form-elem-1" name ="search" placeholder= "search apps"/>
                                           <button type = "button" className= "btn btn-info" data-toogle="modal" data-target= "#modal-1"> MORE APPS</button>

                                        
                                   </div> 
                                                            
                                

                        </div>
                        </div>
                        <div className="navbar navbar-default" role="navigation">
                            <div className="container">
                                
                                    <div className="row">
                                        <button  className= "btn btn-outline-dark btn-sm    " name="reset">BACK</button>
                                        <button  className= "btn btn-outline-dark btn-sm    " name="reset">...</button>
                                        <button  className= "btn btn-outline-dark btn-sm    " name="reset">...</button>
                                         <input type ="text" id="form-elem-1" placeholder= "Household registration"/>
                                        

                                    </div>

                                    <div className="row">
                                        <button  className= "btn btn-outline-dark btn-sm    " >...</button>
                                        <button type= "Submit" className= "btn btn-danger btn-sm" >...</button>
                                        <button  className= "btn btn-outline-dark btn-sm    " >...</button>
                                    
                                        

                                    </div>
                                    

                            </div>
                        </div>
                                                
                    
                    <div className ="container">
                            <div className="row">
                                                                        
                                                                        <div className="col-lg-8">
                                                                                            <div className ="container">
                                                                                                   <div className = "card">
                                                                                                       <div className="row">
                                                                                                        <div className ="col">
                                                                                                        <div className="card-header">SELECTED PROGRAM
                                                                                                        </div>
                                                                                                        <div className="card-body">
                                                                                                        <form action ="" role="form">
                                                                                                            <div className="form-group">
                                                                                                            <label>
                                                                                                            Enrrolling organization unit  </label><br></br>
                                                                                                            <input type= "text" className="form-control" id="form-elem-1" name="orgUnit" placeholder="please enter organization unit"/><br></br>
                                                                                                            <label>Start date</label> <br></br>
                                                                                                            <input type= "date" className="form-control"  name="srtDay" placeholder="please enter starting date"/><br></br>
                                                                                                            <label>End date</label><br></br>
                                                                                                            <input type= "date" className="form-control" name="endDay"id="form-elem-1" placeholder="please enter ending date"/><br></br>
                                                                                                                <div className= "row">
                                                                                                                <div className="col">
                                                                                                                <button type= "Submit" className= "btn btn-success btn-sm" name="submit">Complete</button>
                                                                                                                
                                                                                                                <button type= "Submit" className= "btn btn-warning btn-sm" name="Deactivate">Deactivate</button>
                                                                                                                <button  className= "btn btn-outline-dark btn-sm    " name="reset">...</button>
                                                                                                                </div>
                                                                                                                <button type= "Submit" className= "btn btn-danger btn-sm" name="Delete">Delete</button><br></br>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                        </form>
                                                                                                        </div>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    
                                                                                                        <div className="card-header">other programs</div>
                                                                                                            <div className="card-body">
                                                                                                            No active enrollment exist
                                                                                                            </div>
                                                                                                            
                                                                                                    
                                                                                                    </div>
                                                                                            </div>
                                                                                            <div className = "card">
                                                                                                <div className="card-header">indicators </div> 
                                                                                                        <div className ="card-body">
                                                                                                            No indicators exist
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
                                                                                                        </div>


                                                                                                        </div>

                                                                                            </div>

                                                                                </div>

                                                                <div className="col-lg-4">
                                                                    <div className="container">
                                                                    <div className ="card">
                                                                               <div className="card-header">  feedback </div>
                                                                                <div className="card-body">
                                                                                    No feedback exists
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
                                                                        <div className ="container">
                                                                        <div className ="card">
                                                                               <div className="card-header"> Relationship </div>
                                                                                <div className="card-body">
                                                                               
                                                                                        
                                                                                        
                                                                                            No relationship exist
                                                                                            </div>
                                                                              </div>             
                                                                        </div>
                                                                        <div className="container">

                                                                        <div className ="card">
                                                                               <div className="card-header">  Notes </div>
                                                                                <div className="card-body">
                                                                                                                                    
                                                                                                                                        <form>
                                                                                                
                                                                                                <textarea name="Notes" className="form-control" placeholder= "enter your notes here" /><br></br>
                                                                                                <div className="row">
                                                                                                <div className ="col">
                                                                                                <button type= "Submit" className= "btn btn-primary btn-sm" name="add">Add</button></div>
                                                                                                <button type= "Reset" className= "btn btn-outline-dark btn-sm    " name="reset">clear</button><br></br>
                                                                                                </div>
                                                                                            </form>
                                                                                            </div>
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