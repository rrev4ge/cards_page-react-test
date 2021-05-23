import React from 'react';
import CardList from '../../components/CardList';
import CONSTANTS from '../../CONSTANTS';

const Home = () => {
    return (
      <>
        <header>Header</header>
        <main>
          <div className="listsContainer">
            <div>Counters</div>
            <CardList cardQuantity={CONSTANTS.CARD_QUANTITY} listLabel={"Card"}/>
          </div>
        </main>
        <footer>footer 2021</footer>
      </>
    );
}

export default Home;
