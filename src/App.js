import React, { Component } from "react";

import styled from "styled-components";

import Header from "./Header";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 20px;
  font-size: 1.1rem;
  margin-bottom: 20px;
  border: 0;
`;

const Select = styled.select`
  padding: 20px;
  font-size: 1.1rem;
  margin-bottom: 20px;
  height: 60px;
  border-radius: 0;
`;

const Container = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      gender: "male",
      stepCount: "",
      desiredHeight: "",
      equivalentStrides: "",
      distanceTraveled: ""
    };
  }

  _updateHeight({ target: { value } }) {
    this.setState({ height: value * 1 }, this._updateDistanceTraveled);
  }

  _updateDesiredHeight({ target: { value } }) {
    this.setState({ desiredHeight: value * 1 }, this._updateEquivalentStrides);
  }

  _updateEquivalentStrides() {
    const stride = this._strideLength(this.state.desiredHeight);
    const equivalentStrides = this.state.distanceTraveled / stride;
    console.log("====================================");
    console.log("UPDATE STRIDES");
    console.log("====================================");
    this.setState({ equivalentStrides });
  }

  _updateSteps({ target: { value } }) {
    this.setState({ stepCount: value * 1 }, this._updateDistanceTraveled);
  }

  _updateGender({ target: options }) {
    const gender = [...options].filter(o => o.selected).map(o => o.value)[0];
    this.setState({ gender }, this._updateDistanceTraveled);
  }

  _updateDistanceTraveled() {
    const stride = this._strideLength(this.state.height);
    const distanceTraveled = this.state.stepCount * stride;
    this.setState({ distanceTraveled }, this._updateEquivalentStrides);
  }

  _strideLength(height) {
    return height * (this.state.gender === "male" ? 0.415 : 0.413);
  }

  _distanceTraveled(stride, stepCount) {
    return stepCount * stride;
  }

  render() {
    const stride = this._strideLength(this.state.height);

    return (
      <div>
        <Header />
        <Container>
          <h2>First some info about yourself</h2>
          <p>Everything is in meters (m)</p>
          <Form>
            <InputLabel>
              Gender:
              <Select
                value={this.state.gender}
                onChange={this._updateGender.bind(this)}
                name="gender"
                id=""
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </InputLabel>
            <UserInfo
              stepCount={this.state.stepCount}
              height={this.state.height}
              _updateSteps={this._updateSteps.bind(this)}
              _updateHeight={this._updateHeight.bind(this)}
            />

            <p>Stride: {stride}m</p>
            <p>Distance traveled: {this.state.distanceTraveled}m</p>

            <h2>Next, pick a new height</h2>
            <InputLabel>
              Desired height
              <Input
                type="number"
                value={this.state.desiredHeight}
                placeholder="Desired height"
                onChange={this._updateDesiredHeight.bind(this)}
              />
            </InputLabel>
            <p>Equivalent strides: {this.state.equivalentStrides}</p>
          </Form>
        </Container>
      </div>
    );
  }
}

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  font-size: 0.9rem;
`;
const UserInfo = ({ stepCount, height, _updateSteps, _updateHeight }) => [
  <InputLabel key="stepCount">
    Step count
    <Input
      onChange={_updateSteps}
      value={stepCount}
      type="number"
      placeholder="Step count"
    />
  </InputLabel>,
  <InputLabel key="height">
    Height
    <Input
      onChange={_updateHeight}
      value={height}
      type="number"
      placeholder="Height (meters)"
    />
  </InputLabel>
];

export default App;
