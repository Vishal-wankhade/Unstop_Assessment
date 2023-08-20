import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDays, faCode, faEllipsisVertical, faEnvelopesBulk, faLink, faSuitcase, faUpRightFromSquare, faUser, faXmark} from '@fortawesome/free-solid-svg-icons';


export default function Assessment() {
  const [bar,setBar]= useState(faBars)
  const [assessments, setAssessments] = useState([
    {
      name: 'Math Assessment',
      purpose: 'Job',
      duration: '00',
      ques: '00',
      date: '20 Apr 2023'
    },
    {
      name: 'Math Assessment',
      purpose: 'Job',
      duration: '00',
      ques: '00',
      date: '20 Apr 2023'
    }
    // ... Other assessments
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newAssessment, setNewAssessment] = useState({
    name: '',
    purpose: '',
    duration: '',
    ques: '',
    date: '',
  });

  const handleFormOpen = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setNewAssessment({
      name: '',
      purpose: '',
      duration: '',
      ques: '',
      date: '',
    });
  };

  const handleFormSubmit = () => {
    // Update the assessments array with the new assessment
    setAssessments(prevAssessments => [...prevAssessments, newAssessment]);

    // Close the form
    handleFormClose();
  };

  const changeBar = () =>{
     if(bar === faBars){
      setBar(faXmark)
     }
     else{
      setBar(faBars)
     }
  }

  
    return (
      <div>
        <header>
        <FontAwesomeIcon icon={bar} onClick={changeBar}className='bar'/>
            <h1>Assessment</h1>
            <span className='line'>|</span>
            <div><h2>My Assessment
            </h2></div>
        </header>
        
        <main>
           <h3>Assessment Overview</h3>
           <div className='details'>

               <div className='totalAssessment'>
                  <h5>Total Assessment</h5>
                  <div className='ass-icon'>
                     <FontAwesomeIcon icon={faCode} style={{color: "#474eff",}}/>
                     <p>34</p>
                  </div>
               </div>

               {/* candidates */}

               <div className='candidate'>
                 <div><h5>Candidates</h5></div>
                 <div className='icon-wrap'>
                   <div className='total'>
                     <FontAwesomeIcon icon={faUser} style={{color: "#474eff",}} />
                     <div className='candidate-info'>
                        <p>11,145<span>+89</span></p>
                        <p>Total Candidate</p>
                     </div>
                   </div>

                   <div className='who'>
                     <div className='candidate-info'>
                        <p>11,145<span>+89</span></p>
                        <p>Total Candidate</p>
                     </div>
                   </div>

                  
                   



                 </div>
               </div>
               <div className='source'>
                      <h5>Candidate Sources</h5>
                      <div className='source-icon-wrap'>
                          <div className='mail'>
                            <FontAwesomeIcon icon={faEnvelopesBulk} style={{color: "#ff52e8",}}/>
                            <div className='mail-info'>
                              <p>11,000<span>+89</span></p>
                              <p>E-mails</p>
                            </div>
                          </div>
                          <div className='share'>
                            <p>145<span>+89</span></p>
                            <p>Social Share</p>
                          </div>
                          <div className='link'>
                             <p>145<span>+89</span></p>
                             <p>Unique Link</p>
                          </div>
                      </div>
                   </div>
                   
                   {/* last */}
                   <div className='purpose'>
                       <h5>Total Purpose</h5>
                       <div className='purpose-icon'>
                           <FontAwesomeIcon icon={faLink} style={{color: "#77a8fd",}}/>
                           <p>11</p>
                       </div>

                   </div>

           </div>

           <div className='assessment-section'>
          <h3>My Assessment</h3>
          <div className='assessment-wrap'>
            <div className='new-task'>
              <button onClick={handleFormOpen}>+</button>
              <h3>New Assessment</h3>
              <p>From here you can add questions of mutiple types like MCQ, subjective ( text or paragraph )</p>
            </div>
            <div className='present-assessment'>
              {/* Map through assessments */}
              {assessments.map((item, index) => (
                <div key={index} className='task'>
                  {/* Display assessment details */}
                  <div className='top'>
                          <FontAwesomeIcon icon={faSuitcase} />
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                          
                        </div>
                        <div className='title'>
                        <h4>{item.name}</h4>
                          <h4>{item.purpose} <span className='sep'>|</span> <FontAwesomeIcon icon={faCalendarDays} className='date-icon' /><span className='date'>{item.date}</span></h4>
                        </div>
                         <hr></hr>
                          <div className='bottom'>
                             <div className='left-side'>
                                  <div className='duration'>
                                     <p>{item.duration}</p>
                                     <p>Duration</p>
                                  </div>
                                  <div className='ques'>
                                  <p>{item.ques}</p>
                                     <p>Questions</p>
                                  </div>
                             </div>
                             <div className='right-side'>
                               <button><FontAwesomeIcon icon={faUpRightFromSquare} /><p>Share</p></button>
                               <div className='profile'>
                                    <p>LP</p>
                               </div>
                             </div>
                          </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
        {showForm && (
        <div className='form-overlay'>
          <div className='assessment-form'>
             <div className='form-top'><h2>Create New Assessment </h2>

            <FontAwesomeIcon icon={faXmark} onClick={handleFormClose}/>
             </div>
             <label>Name of the assessment</label>
             <input
              type='text'
              placeholder='Assessment Name'
              value={newAssessment.name}
              onChange={e => setNewAssessment({ ...newAssessment, name: e.target.value })}
            />

             <label>Purpose of the test is</label>
             <select
              value={newAssessment.purpose}
              onChange={e => setNewAssessment({ ...newAssessment, purpose: e.target.value })}
            >
              <option value=''>Select Purpose</option>
              <option value='Job'>Job</option>
              <option value='Practice'>Practice</option>
            </select>
  
  <label>Duration</label>
  <input
              type='number'
              placeholder='Duration (minutes)'
              value={newAssessment.duration}
              onChange={e => setNewAssessment({ ...newAssessment, duration: e.target.value })}
            />
            <label>No Of Questios</label>
  <input
              type='number'
              placeholder='Total Questions'
              value={newAssessment.ques}
              onChange={e => setNewAssessment({ ...newAssessment, ques: e.target.value })}
            />
            <label>Date</label>
            <input
              type='date'
              value={newAssessment.date}
              onChange={e => setNewAssessment({ ...newAssessment, date: e.target.value })}
            />
            <div className='add-wrap'>
            <button onClick={handleFormSubmit} className='add'>Add Assessment</button></div>
            
          </div>
        </div>
      )}
    </div>
  );
  
}
