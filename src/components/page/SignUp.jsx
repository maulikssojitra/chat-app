import React, { Fragment } from 'react'
import { Button, Card, Form, NavLink } from 'react-bootstrap'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsShieldLock } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const SignUp = () => {
    return (
        <Fragment>
            <div className='auth-main d-flex align-items-center justify-content-center'>
                <div className='auth-box'>
                    <div className='auth-title text-center'>
                        <h4>Sign up</h4>
                        <p className='mt-2'>Get your account now.</p>
                    </div>
                    <Card className='p-4 mt-4'>
                        <Card.Body>
                            <Form>
                                <div className='input-filed'>
                                    <label>Email</label>
                                    <div className='input-main rounded-2 d-flex align-items-center'>
                                        <span><AiOutlineMail /></span>
                                        <input placeholder='Enter Email' />
                                    </div>
                                </div>
                                <div className='input-filed mt-3'>
                                    <label>Username</label>
                                    <div className='input-main rounded-2 d-flex align-items-center'>
                                        <span><HiOutlineUserCircle /></span>
                                        <input placeholder='Enter Username' />
                                    </div>
                                </div>
                                <div className='input-filed mt-3'>
                                    <label>Password</label>
                                    <div className='input-main rounded-2 d-flex align-items-center'>
                                        <span><BsShieldLock /></span>
                                        <input placeholder='Enter Password' />
                                    </div>
                                </div>
                                <Button type='submit' className='sign-in-btn w-100 mt-4'>Sign in</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <p className='mt-4'>Don't have an account ? <NavLink>Signup now</NavLink></p>
                </div>
            </div>
        </Fragment>
    )
}

export default SignUp
