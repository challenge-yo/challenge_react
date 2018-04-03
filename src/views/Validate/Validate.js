import React, { Component } from 'react'
import axios from 'axios'
import ValidateCard from '../../components/ValidateCard/ValidateCard'
import {List} from 'material-ui/List';


class Validate extends Component {
    constructor(){
        super()
        this.state={
            validateList:[],
            test:'string'
        }
        this.handleValidate = this.handleValidate.bind(this)
    }
    componentDidMount(){
        let userId= this.props.match.params.id
        axios.get('/api/validate/'+userId).then(res => {
            console.log(res.data)
            this.setState({validateList:res.data})
        })
    }
    getList(){
        let userId= this.props.match.params.id
        axios.get('/api/validate/'+userId).then(res => {
            console.log(res.data)
            this.setState({validateList:res.data})
        })   
    }

    handleValidate(challenge){
        console.log('handle Validate', challenge)
        axios.put('/api/validate', challenge).then(res=>{
            console.log('im back', res.data)
            this.getList()
        })
    }

    render() {
        let validateList = this.state.validateList.map((x,i)=>{return(
            <ValidateCard  key={i} challenge={x} 
            handleValidate={()=>this.handleValidate(x)} 
            />
        )})

        return(
            <div>
                Validate view
                <List>
                    {validateList}
                </List>
                <button onClick={()=>console.log(this.state)}>Test</button>
            </div>
        )
    }
}

export default Validate