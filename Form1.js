import React,{Component} from "react";
class Form1 extends Component{
    state={
        Name:'',
        Contact: '',
        Message:'',
              

    };
    handleChange=(event)=>{
        this.setState({Name:event.target.value});
         };
    handleChange1=(event)=>{
        this.setState({Contact:event.target.value});
        };
    handleChange2=(event)=>{
        this.setState({Message:event.target.value});
        };
       
    handleSubmit=(event)=>{
        alert('Name: '+ this.state.Name+'\n'  +'Contact: '+ this.state.Contact+'\n'  + 'Message:'+this.state.Message);
        
        event.preventDefault();
    };
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.Name} onChange={this.handleChange}/>
                 </label><br></br>

                 <label>
                    Contact:
                    <input type="number" value={this.state.Contact} onChange={this.handleChange1}/>
                 </label><br></br>

                 <label>
                    Message:
                    <input type="text" value={this.state.Message} onChange={this.handleChange2}/>
                 </label><br></br>

                                 
                <input type="Reset" value="Reset"></input> 

                <input type="submit" value="submit"></input>

            </form>
        );
    }
}
export default Form1;