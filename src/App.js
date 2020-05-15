import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Menu, Dropdown,Button,Icon ,Mentions,Pagination } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import axios from "axios";

import PokenonCard from "./PokenonCard";
const { Option } = Mentions;
function showTotal(total) {
  return `Total ${total} items`;
}


//function App() {
  export default class App extends Component {
    
  
    state = {
      countShowedPokemons: 10,
      clickedPage: 1,
      pokemon: null
    };
  
    componentWillMount() {
      this.Pokemonload(this.state.clickedPage, this.state.countShowedPokemons);
    }
  
    async Pokemonload(page, pageSize) {
      let res = await axios.get(
        "https:pokeapi.co/api/v2/pokemon/?limit=" +
          pageSize +
          "&offset=" +
          (page - 1) * pageSize
      );
      this.setState({ pokemon: res.data["results"] });
      console.log(this.setState.name);
    }
  
    changePage = (page, pageSize) => {
      this.setState({ clickedPage: page, countShowedPokemons: pageSize });
      this.Pokemonload(page, pageSize);
      console.log(pageSize);
    };
  
    changeSize = (current, value) => {
      this.changePage(current, value);
    };
   
    render()
    {
      
    return (
      
    <div className="App">
      <header className="App-header">
      <p className="logo">POKEDEX</p>
        <div className="bot">
        <Mentions
    style={{ width: '60%' }}
   
    defaultValue="default"
  >
    
  </Mentions>
      
        
        <div className="sort"> </div>
        <div className="filter"></div>
        <div className="delete"></div>
        </div>
      </header>
      <div className="content">




<div className="Cards1">
      <React.Fragment>   

  
       {this.state.pokemon ?(
        <div className="cards">
          {
           this.state.pokemon.map(pokemon=>(
           <PokenonCard
           key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                types={pokemon.types}
          
           />
           
            ))
          }
         </div>


      ):(
      <h1>Loading Pokemon</h1>
     )}
 </React.Fragment>
 
 </div>
 <div className="pagination1">
          <Pagination
             showSizeChanger
             onShowSizeChange={this.changeSize}
             pageSizeOptions={["10", "20", "50"]}
             defaultCurrent={this.state.clickedPage}
             total={807}
             onChange={this.changePage}
        />
          </div> 
         
          </div>
        </div>
     
     
 
  );
    }
  }


