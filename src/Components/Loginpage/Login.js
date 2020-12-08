import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
import './Login.css';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import google from '../../images/google.svg'
import fb from '../../images/Vector.svg'
class Login extends Component {
	state = {
		email    : '',
		password : '',
		errors   : {},
		type: 'password'
	};

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/');
		}
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/');
		}
		if (nextProps.errors) {
			this.setState({
				errors : nextProps.errors
			});
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email    : this.state.email,
			password : this.state.password
		};
		this.props.loginUser(userData);
	};
		toggle=()=>{
		this.setState({
		type: this.state.type === 'password' ? 'text' : 'password'
		})
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value.toLowerCase()});
	};
	render() {
		const {errors} = this.state;
		return (
			<div className="bg">
<div className='row mx-auto container'>
				<div className='col-md-5 col-sm-12 text-left mt-5'>
					<h1 style={{color: '#0d3859', fontWeight: 'bolder'}}>Welcome back,</h1>
					<p style={{color: '#0d3859', fontWeight: '500'}}>Login to continue</p>
				</div>
				<div className='p-5 m-auto col-md-7 col-sm-12'>
					<form className='form' noValidate onSubmit={this.onSubmit}>
						<div className='form-group mb-4'>
							<label htmlFor='email'>Email</label>
							<input
								value={this.state.email}
								type='email'
								id='email'
								name='email'
								className={classnames('form-control', {'is-invalid': errors.email})}
								placeholder='damilare@techsavvyng.com'
								onChange={this.onChange}
							/>
							{errors.email && <div className='invalid-feedback'>{errors.email}</div>}
						</div>
						<div className='form-group mb-4' style={{position: 'relative'}}>
							<label htmlFor='password'>Password</label>
							<input
								type={this.state.type}
								id='password'
								name='password'
								className={classnames('form-control', {'is-invalid': errors.password})}
								placeholder='**********'
								value={this.state.password}
								onChange={this.onChange}
							/><span onClick={this.toggle} style={{position: 'absolute', right: '16px', top: '50%', cursor: 'pointer'}}>Show</span>
							{errors.password && <div className='invalid-feedback'>{errors.password}</div>}
						</div>
						<button
							style={{
								borderRadius : '3px',
								padding      : '10px',
								width        : '100%',
								background   : '#4299E1',
								color        : '#fff',
								marginTop    : '15px'
							}}
							type='submit'
							className='btn'
						>
							Login
						</button>
						<div className="mt-4">
						<button
							style={{
								borderRadius : '3px',
								border: '1px solid #FF1B1B',
								padding      : '10px',
								width        : '100%',
								background   : '#fff',
								color        : '#000',
								marginTop    : '12px'
							}}
							type='submit'
						>
							<img src={google} alt="" className="afri-img mx-2 my-auto"/><span>LOGIN WITH GOOGLE</span>
						</button>
						</div>
						<div className="mt-4">
						<button
							style={{
								borderRadius : '3px',
								border: '1px solid #475993',
								padding      : '10px',
								width        : '100%',
								background   : '#fff',
								color        : '#000',
								marginTop    : '12px'
							}}
							type='submit'
						>
							<img src={fb} alt="" className="afri-img mx-2 my-auto"/><span>LOGIN WITH FACEBOOK</span>
						</button>
						</div>
						<div className='mt-2'>
							<p>
								You Don't Have an Account Yet?<Link className='ml-1' to='/register'>
									Create one now
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
			</div>
		);
	}
}

Login.propTypes = {
	loginUser : PropTypes.func.isRequired,
	auth      : PropTypes.object.isRequired,
	errors    : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth   : state.auth,
	errors : state.errors
});

export default connect(mapStateToProps, {loginUser})(Login);
