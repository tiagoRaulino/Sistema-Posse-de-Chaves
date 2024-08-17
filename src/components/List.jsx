import React, { useState } from 'react';

const classroomsData = [
    {
        id: 1,
        name: 'Sala 1',
        keyHolder: 'John Doe',
        status: 'Open',
        availability: 'Available'
    },
    {
        id: 2,
        name: 'Sala 2',
        keyHolder: 'Jane Smith',
        status: 'Closed',
        availability: 'Reserved'
    },
    {
        id: 3,
        name: 'Centro academico',
        keyHolder: 'You',
        status: 'Open',
        availability: 'Reserved'
    },
    {
        id: 4,
        name: 'Lab 1',
        keyHolder: 'wdoijwoeijr',
        status: 'Open',
        availability: 'Reserved'
    },
    {
        id: 5,
        name: 'Lab 2',
        keyHolder: 'fdgkdfg',
        status: 'Open',
        availability: 'Reserved'
    },
    {
        id: 6,
        name: 'Lab 3',
        keyHolder: 'cblkxjbc',
        status: 'Open',
        availability: 'Reserved'
    },
];

function List() {
    const [searchText, setSearchText] = useState('');
    const [filters, setFilters] = useState({ status: '', availability: '' });

    const handleSearchChange = (e) => setSearchText(e.target.value.toLowerCase());

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const filteredClassrooms = classroomsData.filter((classroom) => {
        return (
            classroom.name.toLowerCase().includes(searchText) &&
            (filters.status ? classroom.status === filters.status : true) &&
            (filters.availability ? classroom.availability === filters.availability : true)
        );
    });

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Busca por texto"
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        name="status"
                        className="form-select"
                        value={filters.status}
                        onChange={handleFilterChange}
                    >
                        <option value="">Filter by status</option>
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <select
                        name="availability"
                        className="form-select"
                        value={filters.availability}
                        onChange={handleFilterChange}
                    >
                        <option value="">Filter by availability</option>
                        <option value="Available">Available</option>
                        <option value="Reserved">Reserved</option>
                    </select>
                </div>
            </div>
            <div className="row">
                {filteredClassrooms.map((classroom) => (
                    <div className="col-md-4 mb-2" key={classroom.id}>
                        <div className="card flex-row">
                            <div className="card-body">
                                <h5 className="card-title">{classroom.name}</h5>
                                <p className="card-text">Posse da chave: {classroom.keyHolder}</p>
                                <p className="card-text">Status: {classroom.status}</p>
                                <p className="card-text">Disponibilidade: {classroom.availability}</p>
                            </div>
                            {classroom.keyHolder === 'You' && (
                                <button className="btn btn-primary float-end" style={{ maxHeight: 80, alignSelf: 'center' }}>Repassar chave</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;


