import React from 'react';
import './style/Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
    this.inputNama = React.createRef();
    this.inputGaji = React.createRef();
    this.inputAlamat = React.createRef();
    this.inputTl = React.createRef();
    // createRef digunakan untuk mendapatkan nilai pada uncontrolled components
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    // melihat data yg didapatkan
    alert(`
      ${this.inputNama.current.value} 
      ${this.inputGaji.current.value}
      ${this.inputAlamat.current.value}
      ${this.inputTl.current.value}
    `)
  }

  render() {
    return(
        <>
          <div className="Form-cont">
            <h1>Form</h1>
            <form onSubmit={this.onSubmit}>
                <label>
                Nama:<br/>
                <input name="nama" type="text" ref={this.inputNama} />
                </label><br/>
                <label>
                Tanggal Lahir:<br/>
                <input name="tl" type="date" ref={this.inputTl} />
                </label><br/>
                <label>
                Gaji:<br/>
                <input name="gaji" type="number" ref={this.inputGaji} />
                </label><br/>
                <label>
                Alamat:<br/>
                <textarea name="alamat" ref={this.inputAlamat}/>
                </label><br/>
                <button type="submit">Submit</button>
            </form>
          </div>
        </>
    );
  }
}

export default Form;
