import React, {Component} from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import img1 from '../../images/Ellipse 44.svg';
import img6 from '../../images/Ellipse 43.svg'
import img2 from '../../images/Guinea Corn 1 (2).svg';
import img3 from '../../images/Guinea Corn 1 (1).svg';
import img4 from '../../images/Guinea Corn 1 (3).svg';
import img5 from '../../images/Guinea Corn 1.svg'
import heart from '../../images/heart.svg'
class Home extends Component {
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/user');
		}
	}
	render() {
		return (
			<div className="home">		
			<div className='' style={{marginLeft: '22rem'}}>
				<div style={{display: 'flex', justifyContent: 'space-between',marginRight: '22rem'}}>
					<div>
						<h5><b>Items for you</b></h5>
					</div>
					<div>
						<button className="btn p-2" style={{background:'#2C9BBD', color: '#fff'}}>LEND AN ITEM</button>
					</div>
				</div>
				<h6>Categories</h6>
				<div style={{display: 'flex'}}>
					<div className="mx-2" style={{cursor: 'pointer'}}>
						<img src={img1} alt="" style={{width: '4rem'}}/>
						<h6 style={{fontSize: '.8rem'}}>All Categories</h6>
					</div>
					<div className="mx-2" style={{cursor: 'pointer'}}>
						<img src={img6} alt="" style={{width: '4rem'}}/>
						<h6 style={{fontSize: '.8rem'}}>Categories</h6>
					</div>
					<div className="mx-2" style={{cursor: 'pointer'}}>
						<img src={img6} alt="" style={{width: '4rem'}}/>
						<h6 style={{fontSize: '.8rem'}}>Categories</h6>
					</div>
					<div className="mx-2" style={{cursor: 'pointer'}}>
						<img src={img6} alt="" style={{width: '4rem'}}/>
						<h6 style={{fontSize: '.8rem'}}>Categories</h6>
					</div>
					<div className="mx-2" style={{cursor: 'pointer'}}>
						<img src={img6} alt="" style={{width: '4rem'}}/>
						<h6 style={{fontSize: '.8rem'}}>Categories</h6>
					</div>
					<div className="mx-2" style={{cursor: 'pointer'}}>
						<img src={img6} alt="" style={{width: '4rem'}}/>
						<h6 style={{fontSize: '.8rem'}}>Categories</h6>
					</div>
				</div>
			</div>
			<div className="text-center" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', justifyItems: 'center', marginLeft: '12rem', marginRight: '12rem'}}>
					<div className="px-3">
						{/* <img src={heart} alt=""/> */}
						<img src={img2} alt=""/>
						<h6>All Categories</h6>
					</div>
					<div className="px-3">
						<img src={img3} alt=""/>
						<h6>All Categories</h6>
					</div>
					<div className="px-3">
						<img src={img4} alt=""/>
						<h6>All Categories</h6>
					</div>
					<div className="px-3">
						<img src={img5} alt=""/>
						<h6>All Categories</h6>
					</div>
					<div className="px-3">
						<img src={img2} alt=""/>
						<h6>All Categories</h6>
					</div>
					<div className="px-3">
						<img src={img3} alt=""/>
						<h6>All Categories</h6>
					</div>
					<div className="px-3">
						<img src={img4} alt=""/>
						<h6>All Categories</h6>
					</div>
					<div className="px-3">
						<img src={img5} alt=""/>
						<h6>All Categories</h6>
					</div>
					<div className="px-3">
						<img src={img2} alt=""/>
						<h6>All Categories</h6>
					</div>
					<div className="px-3">
						<img src={img3} alt=""/>
						<h6>All Categories</h6>
					</div>
					<div className="px-3">
						<img src={img4} alt=""/>
						<h6>All Categories</h6>
					</div>
					<div className="px-3">
						<img src={img5} alt=""/>
						<h6>All Categories</h6>
					</div>
					</div>
			<div className='footer' style={{bottom: '0'}}>
					<div className='m-auto text-center'>Rentall &copy; 2020</div>
				</div>
			</div>
			
		);
	}
}
Home.propTypes = {
	auth   : PropTypes.object.isRequired,
	errors : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth   : state.auth,
	errors : state.errors
});
export default connect(mapStateToProps)(withRouter(Home));
