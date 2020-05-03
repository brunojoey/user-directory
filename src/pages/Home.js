import React, { useState } from 'react';
import employees from '../employees.json';
import Wrapper from '../components/Wrapper';
import Row from '../components/Row';
import Col from '../components/Column';
import CreateTable from '../components/Table';
import SortButtons from '../components/Button';
import Jumbotron from '../components/JumboTron/index';
import './style.css';

function Home() {
  const [orderBy, setOrderBy] = useState('id');
  const [filterPosBy, setFilterPosBy] = useState('none');
  
  const handleButton = (action, actionBy) => {
    if (action !== 'order' && action !== 'filter') { return };

    (action === 'order') ? setOrderBy(actionBy) : setFilterPosBy(actionBy);
  };

  const renderFilterPosButtons = () => {
    const occupations = employees.map(employee => employee.occupation);
    const filteredOccupations = occupations.filter((occupation, index) => occupation.indexOf(occupation) === index);

    let buttons = filteredOccupations.map((occupation, index) => {
      return (
        <SortButtons
          handleButtonClick={handleButton} 
          text={occupation}
          action='filter'
          actionBy={occupation}
          key={index}
        />
      );
    });

    return buttons;
  }
  
  return(
    <div>
      <Jumbotron>
        <Wrapper>
          <h1 className='text-center display-4'>Employee Directory</h1>
        </Wrapper>
      </Jumbotron>
      <div className='no-jumbo'>
        <Wrapper>
          <Row>
            <Col size='md-6'>
              <h2 className='text-center heading'>Sort</h2>
              <SortButtons handleButtonClick={handleButton} text='ID' action='order' actionBy='id'/>
              <SortButtons handleButtonClick={handleButton} text='Name' action='order' actionBy='name'/>
              <SortButtons handleButtonClick={handleButton} text='Occupation' action='order' actionBy='occupation' />
              <SortButtons handleButtonClick={handleButton} text='Salary' action='order' actionBy='salary' />
            </Col>
            <Col size='md-6'>
              <h2 className='text-center heading'>Filter By Occupations</h2>
              {renderFilterPosButtons()}
              <SortButtons handleButtonClick={handleButton} text={`No Filter`} action='filter' actionBy='none' />
            </Col>
          </Row>
        </Wrapper>
      </div>
      <Jumbotron>
        <Wrapper fluid='fluid'>
          <Row>
            <Col size='md-12'>
              <CreateTable employees={employees} orderBy={orderBy} filterPosBy={filterPosBy} />
            </Col>
          </Row>
        </Wrapper>
      </Jumbotron>
    </div>
  ); 
}

export default Home;