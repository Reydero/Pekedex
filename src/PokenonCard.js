import React, { Component } from 'react'
import './PokemonCard.css';
import { Link } from 'react-router-dom';

/*import styled from 'styled-components';
const Sprite=styled.img`
width:5em;
height:5em;
display:none;
`;
<Sprite
                
                className="card-img-top raunded mx-auto mt2"
                onLoad={()=>this.setState({imageLoading:false})}
                onError={()=>this.setState({toManyRequests:true})}
                src={this.state.imageUrl}
/>*/
export default class PokenonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        pokemontypes:'',
       imageLoading:true,
       toManyRequests:false
      };
    
      componentDidMount() {
        const { name, url } = this.props;
    
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        //const imageUrl = `./sprites/pokemon/${pokemonIndex}.png`;
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    
        this.setState({ name, imageUrl, pokemonIndex });
      }
    render() {
        
        return (
            
            <div className='card'>
                <div className ='card-header'>
        <h1>{this.state.name}</h1>
        <h2>{this.state.pokemonIndex}</h2>
        
                </div>
                <div className="card-con">
                <img
            
            src="this.state.imageUrl"
            width="200px"  height="130px">
             
            </img>
        
                    
                
                </div>
               
            </div>
        )
        
    }
}
