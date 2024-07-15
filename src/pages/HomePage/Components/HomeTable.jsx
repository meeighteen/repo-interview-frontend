import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import FormModal from '../../../components/Form/FormModal';
import Input from '../../../components/Input/Input';
import '../../../components/Table/Table.css';

const HomeTable = ({ data, columns }) => {
    const [filterText, setFilterText] = useState('');
    const [resultsPerPage, setResultsPerPage] = useState(5);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFilterTextChange = (e) => {
        console.log("sdasda", e.target.value)
        setFilterText(e.target.value);
    };

    const handleResultsPerPageChange = (e) => {
        setResultsPerPage(Number(e.target.value));
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    const filteredData = data.filter(item =>
        item['name'].includes(filterText.toLowerCase()
    ));

    const paginatedData = filteredData.slice(0, resultsPerPage);

    return (
        <>
            <div className='HeaderTable' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0px 20px 10px 20px', padding:'0px 20px 0px 20px'}}>
                <Input 
                    id={'search'} 
                    type={'text'}  
                    onChange={handleFilterTextChange} 
                    placeholder={'Search...'} 
                    value={filterText}
                    style={{ borderRadius: '6px', border: '2px solid #cccccc', paddingLeft:'10px' }}/>
                <Button 
                    onClick={handleOpenModal} 
                    style={{ backgroundColor:'rgb(255, 221, 0)', color:'rgb(15, 38, 92)', height:'40px', width:'80px', borderRadius:'3px', border:'0px', fontWeight: '600', fontSize:'12px'}}>
                    Agregar
                </Button>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h1>Formulario de registro</h1>
                <hr />
                <FormModal></FormModal>
            </Modal>
            <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    {columns.map((column) => (
                    <th key={column.key}>{column.header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {paginatedData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                    {columns.map((column) => (
                        <td key={column.key}>
                        {column.render ? column.render(row) : row[column.key]}
                        </td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <br/>
            <div className="filter-container">
                <select id="filter" value={resultsPerPage} onChange={handleResultsPerPageChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
            </div>
        </>
    );
};

export default HomeTable;
