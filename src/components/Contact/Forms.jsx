import React from 'react'

const Forms = () => {
    return (
        <div className='container mt-16 py-10' style={{ background: "rgb(77, 238, 203)" }}>
            <h2>INQUIRY FROMS : </h2>
            <form action="backend.php">
                <label for="name"><b>Name : </b></label>
                <div>
                    <input type="text" name="My name" id="name" />
                </div><br />
                <label for="email"> <b>Email : </b></label>
                <div>
                    <input type="email" name="My email" id="mail" />
                </div><br />
                <label for="mobno"><b>Mobile No: </b></label>
                <div>
                    <input type="number" name="Mobile No : " id="mobno" />
                </div><br />
                <div>
                    <b>Gender : Male</b> <input type="radio" name="my gender" /> <b>Female</b> <input type="radio" name="my gender" /> <b>Others</b>
                    <input type="radio" name="my gender" />
                </div><br />
                <div>
                    <b>Are you interested about JYOTI :</b> <input type="checkbox" name="Interseted" />
                </div><br />
                <div>

                    <div>
                        <label for="mycar"><b>Review about JYOTI: </b></label>
                        <select name="Myname" id="mycar">
                            <option value="5star">Five Star</option>
                            <option value="4star">Four Star</option>
                            <option value="3star" >Three Star</option>
                            <option value="2star">Two Star</option>
                            <option value="1star">One Star</option>
                            <option value="choice" selected>Your Choice</option>
                        </select>
                    </div><br />
                    <div>
                        <b>Write about your Suggestion : </b><br /><br /> <textarea name="Suggestion" id="" cols="80" rows="10"></textarea>
                    </div>

                    <input type="submit" value="Submit now" />

                    <input type="reset" value="reset now." />
                </div>

            </form>
        </div>
    )
}

export default Forms
