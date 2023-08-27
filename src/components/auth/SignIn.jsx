import React, { Fragment } from 'react'
import { Button, Card, Form, NavLink } from 'react-bootstrap'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsShieldLock } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <Fragment>
      <div className='auth-main d-flex align-items-center justify-content-center'>
        <div className='auth-box'>
          <div className='auth-title text-center'>
            <h4>Sign in</h4>
            <p className='mt-2'>Sign in to continue</p>
          </div>
          <Card className='p-4 mt-4'>
            <Card.Body>
              <Form>
                <div className='input-filed'>
                  <label>Username</label>
                  <div className='input-main rounded-2 d-flex align-items-center'>
                    <span><HiOutlineUserCircle /></span>
                    <input placeholder='Enter Username' />
                  </div>
                </div>
                <div className='input-filed mt-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <label>Password</label>
                    <Link to="/reset-password">Forgot password?</Link>
                  </div>
                  <div className='input-main rounded-2 d-flex align-items-center'>
                    <span><BsShieldLock /></span>
                    <input placeholder='Enter Password' />
                  </div>
                </div>
                <Button type='submit' className='sign-in-btn w-100 mt-4'>Sign in</Button>
              </Form>
            </Card.Body>
          </Card>
          <p className='mt-4'>Don't have an account ? <Link to="/sign-up">Sign up</Link></p>
        </div>
      </div>
    </Fragment>
  )
}

export default SignIn
