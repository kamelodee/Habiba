import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
export default function SearchForm() {
    return (
        <div>
            <form action="" className="flex-form">
                <input type="search" placeholder="search for the best" />
                <input type="submit" value="Search"/>
            </form>
       </div>
    )
}
