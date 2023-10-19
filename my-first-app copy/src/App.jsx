import './test.css'


export default function App(){
  return(
    <div className="app">
      <img src="react.jpg" alt="photo" />
      <h1>I LEARN <span>REACT</span></h1>
      <p>React is Ammazing</p>

      <div>
        <button className='btn-first'>cliquer moi</button>
        <button className='btn'>tchek me out</button><br /> <br />
        
      


        <div>
          <form action="#">
            <label htmlFor="name">Entrer Votre Nom</label>
            <input type="search" id="recherche" name="recherche" placeholder="Entrez votre recherche ici"></input>


          </form>



          
        </div>

        <hr />

        <h1 className="like">DO YOU LIKE REACT ?</h1>
        <p>React est une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur dynamiques et réactives. Grâce à son approche de composants réutilisables, React facilite le développement d'applications web interactives. Les composants React sont conçus pour être modulaires, ce qui simplifie la gestion de l'interface utilisateur et permet une maintenance plus aisée. En outre, React est soutenu par une communauté active et offre des fonctionnalités modernes telles que le rendu côté client, ce qui en fait un choix puissant pour la construction d'applications web modernes.</p>

      </div>
    
    </div>

  )

}
