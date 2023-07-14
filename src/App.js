import React, {Component} from "react";
import InputArea from "./components/InputArea.js";
import CVDisplay from "./components/CVDisplay.js";
import "./styles/App.css";

class App extends Component{
  constructor(){
    super();

    this.state = {
      general: {
        name: "",
        email: "",
        phone: ""
      },
      education: {
        school: "",
        concentration: "",
        date: ""
      },
      work: {
        company: "",
        position: "",
        date: ""
      }
    };
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.updateSchool = this.updateSchool.bind(this);
    this.updateConcentration = this.updateConcentration.bind(this);
    this.updateEducationDate = this.updateEducationDate.bind(this);
    this.updateCompany = this.updateCompany.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateWorkDate = this.updateWorkDate.bind(this);

  }

  updateName(e){
    this.setState({
      general: {
        name: e.target.value,
        email: this.state.general.email,
        phone: this.state.general.phone
      },
      education: this.state.education,
      work: this.state.work
    });
  }

  updateEmail(e){
    this.setState({
      general: {
        name: this.state.general.name,
        email: e.target.value,
        phone: this.state.general.phone
      },
      education: this.state.education,
      work: this.state.work
    });
  }

  updatePhone(e){
    this.setState({
      general: {
        name: this.state.general.name,
        email: this.state.general.email,
        phone: e.target.value
      },
      education: this.state.education,
      work: this.state.work
    });
  }

  updateSchool(e){
    this.setState({
      general: this.state.general,
      education: {
        school: e.target.value,
        concentration: this.state.education.concentration,
        date: this.state.education.date
      },
      work: this.state.work
    });
  }

  updateConcentration(e){
    this.setState({
      general: this.state.general,
      education: {
        school: this.state.education.school,
        concentration: e.target.value,
        date: this.state.education.date
      },
      work: this.state.work
    });
  }

  updateEducationDate(e){
    this.setState({
      general: this.state.general,
      education: {
        school: this.state.education.school,
        concentration: this.state.education.concentration,
        date: e.target.value
      },
      work: this.state.work
    });
  }

  updateCompany(e){
    this.setState({
      general: this.state.general,
      education: this.state.education,
      work: {
        company: e.target.value,
        position: this.state.work.position,
        date: this.state.work.date
      }
    });
  }

  updatePosition(e){
    this.setState({
      general: this.state.general,
      education: this.state.education,
      work: {
        company: this.state.work.company,
        position: e.target.value,
        date: this.state.work.date
      }
    });
  }

  updateWorkDate(e){
    this.setState({
      general: this.state.general,
      education: this.state.education,
      work: {
        company: this.state.work.company,
        position: this.state.work.position,
        date: e.target.value
      }
    });
  }

  render(){
    return (
      <>
        <h1>CV Application</h1> 
        <InputArea
          name={this.state.general.name}
          email={this.state.general.email}
          phone={this.state.general.phone}
          updateName={this.updateName}
          updateEmail={this.updateEmail}
          updatePhone={this.updatePhone}
          school={this.state.education.school}
          concentration={this.state.education.concentration}
          educationDate={this.state.education.date}
          updateSchool={this.updateSchool}
          updateConcentration={this.updateConcentration}
          updateEducationDate={this.updateEducationDate}
          company={this.state.work.company}
          position={this.state.work.position}
          workDate={this.state.work.date}
          updateCompany={this.updateCompany}
          updatePosition={this.updatePosition}
          updateWorkDate={this.updateWorkDate}
        />
        <CVDisplay />
      </>
    );
  }
}

export default App;
