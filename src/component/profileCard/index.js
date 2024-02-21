import {Component} from 'react'

class ProfileCard extends Component{
    state={profileDetails:{}}

    componentDidMount(){
        this.getMyData()
    }
    getMyData= async ()=>{
        const options={
            method:'GET'
        }
        const response=await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc',options)
        const data=await response.json()
        const mydata=data.results[0]
        // console.log(mydata)
        const details={name:`${mydata.name.title} ${mydata.name.first} ${mydata.name.last}`,phoneNumber:mydata.phone,largeImageUrl:mydata.picture.large,mediumImageUrl:mydata.picture.medium}
        this.setState({profileDetails:details})
    }


    render(){
        const{profileDetails}=this.state
        console.log(profileDetails)
        const {name,phoneNumber,largeImageUrl}=profileDetails

        return(
            <div className='flex flex-col justify-center items-center bg-orange-300 md:bg-pink-200 h-screen'>
                <div className='m-2 flex flex-row justify-between p-3 bg-gradient-to-tr md:from-green-400  from-red-600 rounded-2xl h-44 sm:w-96 border-2 md:border-indigo-400  border-red-200'> 
                <div className='self-center'>
                    <img className='h-32  rounded-2xl mr-6 w-32' src={largeImageUrl} alt='mediumImage'/>
                </div>
                <div className='h-5/6 self-center'>
                    <h1 className='text-xl font-roboto hover:text-indigo-900 ml-2 text-left font-bold text-black'>{name}</h1>
                    <p className='text-base mt-16 ml-2 hover:text-indigo-900 text-left mr-auto font-mono font-bold text-black'>{phoneNumber}</p>
                </div>
                </div>

            </div>
        )
    }

    

}

export default ProfileCard