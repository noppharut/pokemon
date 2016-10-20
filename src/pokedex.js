import React from 'react'
import ReactDom from 'react-dom'

// let 
/*
const HEADER = () => {
	return()
}*/
// sysmatic below 
const HEADER = (props) => (

	<center><h1>{props.title}</h1></center>

)

const POKEMONCARD = (props) => (

	<section>
		<h1>name : {props.item.name}</h1>
		<img src={props.item.img} />
	</section>

)
const CONTENT = (props) => (

	
		<section>
			{props.list.listP.map(
				pokemon => ( 
								<POKEMONCARD  item={pokemon} />)
							)
			}
		</section>
)




const APP = () => {
	//const title = "MyPokemon"
	const title = 'MY POKEMON';
	const pokemonList = { listP : [
							{
								name : "Gloom",
								img : "img/Gloom.png"
							},
							{
								name : "Magmar",
								img : "img/Magmar.png"
							},
							{
								name : "Pikachu",
								img : "img/pikachu.jpg"
							},
							{
								name : "Seel",
								img : "img/seel.png"
							}
						]
						};
	return(
		<section>
			<HEADER title={title} />
			<CONTENT list={pokemonList} />
		</section>
	)
}

const element =  document.getElementById('pokemon');
ReactDom.render(<APP/>, element);





