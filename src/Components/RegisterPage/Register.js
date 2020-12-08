import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './Register.css';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import google from '../../images/google.svg'
import fb from '../../images/Vector.svg'
class Register extends Component {
	state = {
		firstname : '',
		lastname  : '',
		email     : '',
		password  : '',
		errors    : {}
	};
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/user');
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({errors: nextProps.errors});
		}
	}
	onSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			firstname : this.state.firstname,
			lastname  : this.state.lastname,
			email     : this.state.email,
			password  : this.state.password
		};

		this.props.registerUser(newUser, this.props.history);
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
					<h1 style={{color: '#0d3859', fontWeight: 'bolder'}}>Create an account</h1>
				</div>
				<div className='p-5 m-auto col-md-7 col-sm-12'>
					<form noValidate onSubmit={this.onSubmit} className='form'>
						<div className='form-row'>
							<div className='form-group col-md-6 mb-4'>
								<label htmlFor='firstname'>Firstname</label>
								<input
									type='text'
									id='firstname'
									name='firstname'
									className={classnames('form-control mb-2', {'is-invalid': errors.firstname})}
									placeholder='Dammy'
									value={this.state.firstname}
									onChange={this.onChange}
								/>
								{errors.firstname && <div className='invalid-feedback'>{errors.firstname}</div>}
							</div>
							<div className='form-group col-md-6 mb-4'>
								<label htmlFor='lastname'>Lastname</label>
								<input
									type='text'
									id='lastname'
									name='lastname'
									className={classnames('form-control mb-2', {'is-invalid': errors.lastname})}
									placeholder='Johnson'
									value={this.state.lastname}
									onChange={this.onChange}
								/>
								{errors.lastname && <div className='invalid-feedback'>{errors.lastname}</div>}
							</div>
						</div>

						<div className='form-group mb-4'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								name='email'
								className={classnames('form-control mb-2', {'is-invalid': errors.email})}
								placeholder='damilare@techsavvyng.com'
								value={this.state.email}
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
						<div className='form-group mb-4'>
							<label htmlFor='email'>Phone No</label>
							<input
								type='number'
								id='phone'
								name='phone'
								className={classnames('form-control mb-2', {'is-invalid': errors.phone})}
								placeholder='+23480****'
								value={this.state.phone}
								onChange={this.onChange}
							/>
							{errors.phone && <div className='invalid-feedback'>{errors.phone}</div>}
						</div>
						<button
							style={{
								borderRadius : '3px',
								padding      : '10px',
								width        : '100%',
								background   : '#4299E1',
								color        : '#fff',
								marginTop    : '12px'
							}}
							type='submit'
							className='btn btn-info'
						>
							Register
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
								Already Have an Account!
								<Link className='ml-1' to='/login'>
									Login
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
Register.propTypes = {
	registerUser : PropTypes.func.isRequired,
	auth         : PropTypes.object.isRequired,
	errors       : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth   : state.auth,
	errors : state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
