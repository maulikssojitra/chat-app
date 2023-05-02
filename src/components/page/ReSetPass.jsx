import React, { Fragment } from 'react'
import { Button, Card, Form, NavLink } from 'react-bootstrap'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsShieldLock } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const ReSetPass = () => {
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
                            <p className='alert alert-success' style={{backgroundColor: "#cdf7ec", color: "#0f5132"}}>Enter your Email and instructions will be sent to you!</p>
                            <Form>
                                <div className='input-filed'>
                                    <label>Email</label>
                                    <div className='input-main rounded-2 d-flex align-items-center'>
                                        <span><AiOutlineMail /></span>
                                        <input placeholder='Enter Email' />
                                    </div>
                                </div>
                                <Button type='submit' className='sign-in-btn w-100 mt-4'>Reset</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <p className='mt-4'>Remember It ? <NavLink>Signin</NavLink></p>
                </div>
            </div>
        </Fragment>
    )
}

export default ReSetPass
