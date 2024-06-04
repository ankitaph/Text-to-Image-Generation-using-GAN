import React, { useState } from "react";
import { Button, Card, Col, Form, Image, Row, Spinner } from "react-bootstrap";
import { useGetImagesMutation, } from "../features/apiSlice";
import { basic } from "../utils/ProtectedRoute1";
import axios from "axios"
import { getText } from "../utils/test";
import { getError } from "../utils/getError";


function ImgGenerator() {
 
  const [getImages,{isLoading}] = useGetImagesMutation();

var [text,setText] = useState('')
const [img,setImg] = useState('/images/placeholder.jpg')







  const handleSubmit = async(e)=>{
e.preventDefault();
    try {
      
     if(getText(text)===-1){
      getError({message:"Please Enter Birds Related Prompt"});
      return;
      

     }
      const data = await getImages(getText(text)).unwrap();
      
      setImg(data?.output_url)
      const generate = await axios.post("http://localhost:5000/generate",{"text_input":text})
      console.log(generate)
    } catch (error) {
   
    }
  }

  return (
    <Row className="d-flex justify-content-center my-2">
      <Col md={5}>
        <Card className="rounded-5 p-4 glass-morf">
          <div
            className="my-2 rounded-5"
            style={{
              maxHeight: "400px",
              maxWidth: "500px",
              border: "2px solid black",
              overflow:'hidden'
            }}
          >
            <Image fluid src={img} className="rounded-5" style={{objectFit:'cover',maxHeight:'100%',maxWidth:'100%'}}/>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Text to Image</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Text goes here..."
                value={text}
                onChange={(e)=>setText(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" className="m-2 rounded-pill px-5">
             {isLoading?
             <Spinner animation="grow" variant="xs" />
            :
            'Generate'
            } 
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default ImgGenerator;
