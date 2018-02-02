import React, { Component } from "react";

import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 20px;
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 20px;
  font-size: 1.1rem;
  margin-bottom: 20px;
  height: 60px;
`;

const Container = styled.div`
  padding: 20px;
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
    console.log("====================================");
    console.log("STRIDE", stride);
    console.log("====================================");
    const distanceTraveled = this.state.stepCount * stride;
    this.setState({ distanceTraveled });
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
      <Container>
        <p>Everything is in meters (m)</p>
        <Form>
          <Select
            value={this.state.gender}
            onChange={this._updateGender.bind(this)}
            name="gender"
            id=""
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>

          <Input
            onChange={this._updateSteps.bind(this)}
            value={this.state.stepCount}
            type="number"
            placeholder="Step count"
          />
          <Input
            onChange={this._updateHeight.bind(this)}
            value={this.state.height}
            type="number"
            placeholder="Height (meters)"
          />
          <p>Stride: {stride}m</p>
          <p>Distance traveled: {this.state.distanceTraveled}m</p>

          <Input
            type="number"
            value={this.state.desiredHeight}
            placeholder="Desired height"
            onChange={this._updateDesiredHeight.bind(this)}
          />
          <p>Equivalent strides: {this.state.equivalentStrides}</p>
        </Form>
      </Container>
    );
  }
}

export default App;
