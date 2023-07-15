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
      },
      cv: {
        general: {
          name: "Your Name",
          email: "youremail@placeholder.net",
          phone: "XXX-XXX-XXXX"
        },
        education: {
          school: "Your School",
          concentration: "Your Concentration",
          date: "XX/XX/XXXX-XX/XX/XXXX"
        },
        work: {
          company: "Your Company",
          position: "Your Position",
          date: "XX/XX/XXXX-XX/XX/XXXX"
        }
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
    this.enterGeneral = this.enterGeneral.bind(this);
    this.enterEducation = this.enterEducation.bind(this);
    this.enterWork = this.enterWork.bind(this);

  }

  enterGeneral(){
    this.setState({
      general: this.state.general,
      education: this.state.education,
      work: this.state.work,
      cv: {
        general: this.state.general,
        education: this.state.cv.education,
        work: this.state.cv.work
      }
    })
  }

  enterEducation(){
    this.setState({
      general: this.state.general,
      education: this.state.education,
      work: this.state.work,
      cv: {
        general: this.state.cv.general,
        education: this.state.education,
        work: this.state.cv.work
      }
    })
  }

  enterWork(){
    this.setState({
      general: this.state.general,
      education: this.state.education,
      work: this.state.work,
      cv: {
        general: this.state.cv.general,
        education: this.state.cv.education,
        work: this.state.work
      }
    })
  }

  updateName(e){
    this.setState({
      general: {
        name: e.target.value,
        email: this.state.general.email,
        phone: this.state.general.phone
      },
      education: this.state.education,
      work: this.state.work,
      cv: this.state.cv
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
      work: this.state.work,
      cv: this.state.cv
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
      work: this.state.work,
      cv: this.state.cv
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
      work: this.state.work,
      cv: this.state.cv
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
      work: this.state.work,
      cv: this.state.cv
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
      work: this.state.work,
      cv: this.state.cv
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
      },
      cv: this.state.cv
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
      },
      cv: this.state.cv
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
      },
      cv: this.state.cv
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
          enterGeneral={this.enterGeneral}
          school={this.state.education.school}
          concentration={this.state.education.concentration}
          educationDate={this.state.education.date}
          updateSchool={this.updateSchool}
          updateConcentration={this.updateConcentration}
          updateEducationDate={this.updateEducationDate}
          enterEducation={this.enterEducation}
          company={this.state.work.company}
          position={this.state.work.position}
          workDate={this.state.work.date}
          updateCompany={this.updateCompany}
          updatePosition={this.updatePosition}
          updateWorkDate={this.updateWorkDate}
          enterWork={this.enterWork}
        />
        <CVDisplay
          name={this.state.cv.general.name}
          email={this.state.cv.general.email}
          phone={this.state.cv.general.phone}
          school={this.state.cv.education.school}
          concentration={this.state.cv.education.concentration}
          educationDate={this.state.cv.education.date}
          company={this.state.cv.work.company}
          position={this.state.cv.work.position}
          workDate={this.state.cv.work.date}
        />
      </>
    );
  }
}

export default App;
