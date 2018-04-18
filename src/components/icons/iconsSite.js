
import React from 'react'

const IconsSite = (props) => {

    if(props.name == 'songs'){
        return (
            <svg className="iconsSite" id={props.name} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <rect id={`${props.name}Bg`} x="0" y="0" width="24" height="24" fill="none" />
                <path d="M12.968,20.01l-1.966,0l0,-16.02l1.966,0l0,16.02Zm3.541,-3.031l-2.026,0l0,-9.958l2.026,0l0,9.958Zm-7.021,0l-2.033,0l0,-9.958l2.033,0l0,9.958Zm-3.548,-2.132l-1.95,0l0,-5.694l1.95,0l0,5.694Zm14.07,0l-1.987,0l0,-5.694l1.987,0l0,5.694Z" />
            </svg>
        )
    }
    else if(props.name == 'videos'){
        return (
            <svg className="iconsSite" id={props.name} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <rect id={`${props.name}Bg`} x="0" y="0" width="24" height="24" fill="none" />
                <path d="M15.175,20.153l-1.405,-1.405l4.978,-4.978l1.405,1.405l-4.978,4.978Zm-4.808,-0.143l-1.433,-1.433l9.643,-9.643l1.433,1.433l-9.643,9.643Zm-5.008,0l-1.39,-1.39l14.651,-14.651l1.39,1.39l-14.651,14.651Zm0.047,-4.969l-1.437,-1.437l9.635,-9.635l1.437,1.437l-9.635,9.635Zm-0.058,-4.959l-1.379,-1.379l4.734,-4.734l1.379,1.379l-4.734,4.734Z" />
            </svg>
        )
    }
    else if(props.name == 'words'){
        return (
            <svg className="iconsSite" id={props.name} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <rect id={`${props.name}Bg`} x="0" y="0" width="24" height="24" fill="none" />
                <path d="M6.487,12.968l0,-1.966l11.026,0l0,1.966l-11.026,0Z" />
                <path d="M3.99,16.509l0,-2.026l16.02,0l0,2.026l-16.02,0Z" />
                <path d="M3.99,9.488l0,-2.033l16.02,0l0,2.033l-16.02,0Z" />
                <path d="M6.487,5.94l0,-1.95l11.026,0l0,1.95l-11.026,0Z" />
                <path d="M6.487,20.01l0,-1.987l11.026,0l0,1.987l-11.026,0Z" />
            </svg>
        )
    }
}

export default IconsSite



