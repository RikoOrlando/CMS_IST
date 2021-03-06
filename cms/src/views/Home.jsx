import React from 'react'
import FormRegister from '../components/form'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Home() {
    const {login, loading} = useSelector(state => state.user)
    // const [signIn, setSignIn] = useState('')
    // const [signUp, setSignUp] = useState('')

    // const handleClickSignIn = () => {
    //     setSignUp("animated flipOutY")
    //     setTimeout(() => {
    //         setSignUp("none")
    //         setSignIn("animated flipInY")
            
    //     }, 1100);
    // }
    // const handleClickSignOut = () => {
    //     setSignIn("animated flipOutY")
    //     setTimeout(() => {
    //         setSignIn('none')
    //         setSignUp("animated flipInY")
    //     }, 1100);
    // }

    return (
        <div className="containerHome">
            {/* <div className={signUp}>
                <div>
                    <FormRegister action="Registration" loading={loading} togle={handleClickSignIn} show={'have Account?'}/>
                </div>
            </div> */}
            <div>
                <div>
                    <FormRegister action="Login" loading={loading}/>
                </div>
            </div>
            {
                login ? <Redirect to="/mainPage/role"/> : <></>
            }
            <img className="bg" src={require('../image/bgHome.svg')} alt=""/>
        </div>
    )
}