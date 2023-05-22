import React, {useState} from 'react';
import './App.css';
import Article from "./Components/Article";
import Button from "./Components/Button";
import {useForm} from "react-hook-form";
import Input from "./Components/Input";


function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0)
    const [bananaCounter, setBananaCounter] = useState(0)
    const [appleCounter, setAppleCounter] = useState(0)
    const [kiwiCounter, setKiwiCounter] = useState(0)

    const {register, handleSubmit, formState: {errors}} = useForm();
    // console.log("ERRORS: ", errors)

    function resetAll() {
        setKiwiCounter(0)
        setStrawberryCounter(0)
        setAppleCounter(0)
        setBananaCounter(0)
    }

    function onFormSubmit(data) {
        console.log(data)
        resetAll()
    }


    return (
        <>
            <Article
                className={"fruitCard"}
                fruitName="🍓 Strawberries"
                fruitCounter={strawberryCounter}
                setFruitCounter={setStrawberryCounter}/>

            <Article
                className={"fruitCard"}
                fruitName="🍌 Bananas"
                fruitCounter={bananaCounter}
                setFruitCounter={setBananaCounter}/>
            <Article
                className={"fruitCard"}
                fruitName="🍏 Apple"
                fruitCounter={appleCounter}
                setFruitCounter={setAppleCounter}/>
            <Article
                className={"fruitCard"}
                fruitName="🥝 Kiwis"
                fruitCounter={kiwiCounter}
                setFruitCounter={setKiwiCounter}/>
            <Button
                typeButton="button"
                handleClick={resetAll}
                buttonName="RESET"
            />

            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend>Order Form</legend>

                    <Input
                    labelname= "First Name"
                    type="text"
                    name="firstname"
                    register={register}
                    errors={errors}
                    />

                    <Input
                    labelname = "Last Name"
                    type="text"
                    name="lastname"
                    validationRules={{
                        required: {
                            value: true,
                            message: "Last name is required"
                        }, minLength: {
                            value: 2,
                            message: 'Last name must have at least two characters'
                        }}}
                    register={register}
                    errors={errors}
                    />

                    <Input
                    labelname="Age"
                    type="number"
                    name="age"
                    validationRules={{required: {
                            value: true,
                            message: 'Age is required'
                        },
                        min: {
                            value:18,
                            message: 'Age minimum is 18'
                        }}}
                    register={register}
                    errors={errors}
                    />

                   <Input
                   labelname="Zip code"
                   type="text"
                   name="zipcode"
                   register={register}
                   errors={errors}
                   />

                    <p>Order frequency</p>
                    <select
                        {...register("frequency")}
                        id="frequency">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                    <div>

                        <Input
                            labelname=""
                            type="radio"
                            name="daypart"
                            value="day"
                            register={register}
                            errors={errors}
                            radioName="Day"
                        >

                        </Input>
                            <Input
                            labelname=""
                            type="radio"
                            name="daypart"
                            value="evening"
                            register={register}
                            errors={errors}
                            radioName="Evening"
                        >
                        </Input>
                    </div>
                    Comment
                    <textarea
                        {...register("comment", {maxLength: 50})}
                        id="comment"
                        cols="30"
                        rows="10">

                    </textarea>
                    <label htmlFor="terms">
                        <input
                            type="checkbox"
                            id="terms"
                            {...register("terms", {required: true})}
                            value="terms"/>
                        I agree to the
                        Terms and Conditions</label>
                    <input type="submit" value="Submit"/>
                </fieldset>
            </form>
        </>
    );
}

export default App;
