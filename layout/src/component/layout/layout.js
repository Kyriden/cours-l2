import React from 'react';
import data from '../../user.js'
import '../../bootstrap/bootstrap.min.css'

class Layout extends React.Component {
    render() {
        return (
            <div data-testid="layout">
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="card m-5 bg-secondary text-white">
                                <img className="card-img-top" src={data["results"][0].picture["large"]} alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title"><strong>{`${data["results"][0].name["first"]} ${data["results"][0].name["last"]}`}</strong></h4>
                                    <p className="card-text">
                                        <strong>Age</strong> : {data["results"][0].dob['age']} <br />
                                        <strong>Mail address :</strong>  {data["results"][0].email} <br />
                                        <strong>Address :</strong>  {`${data["results"][0].location.street["number"]} ${data["results"][0].location.street["name"]} ${','} ${data["results"][0].location["city"]} ${','} ${data["results"][0].location['country']}`} <br />
                                        <strong>Coordinates. :</strong>  {`${data["results"][0].location.coordinates['latitude']} ${','} ${data["results"][0].location.coordinates['longitude']}`} <br />
                                        <strong>Phone :</strong> {data["results"][0]['phone']}
                                    </p>
                                    <a href="https://randomuser.me/" target="_blank" className="btn btn-danger">Other random user</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;