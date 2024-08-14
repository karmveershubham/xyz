// components/WorkEducation.js
import React from 'react';

const WorkEducation = () => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About Ryan Doblen</h2>
        <p>
          I am a scientist with a strong passion for teaching with 15 years of teaching experience. Received a Doctorate in Physics from a reputable university in the United States and I am currently residing in Toronto providing private and group lessons for middle school, high school, and college students.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Work history</h2>
        <p><strong>2017 to 2018</strong> Postdoctoral Research Fellow Medical College of Wisconsin – Milwaukee, WI</p>
        <ul className="list-disc list-inside">
          <li>Conducted experimental and computational research on an MR-Linac medical linear accelerator to pinpoint the instrument design effect on the dose distribution</li>
          <li>Took part in experiments to identify the effects of the source-to-axis distance difference between an MR-Linac and a conventional Linac</li>
          <li>Generated 3D and IMRT dose plans with Monaco workstation</li>
          <li>Received machine quality assurance and safety training on operational Linacs</li>
          <li>Calibrated and operated radiation detection instruments</li>
          <li>Authored professional scientific papers for publishing in peer-reviewed journals</li>
          <li>Explored data to discover patterns, meaningful relationships, anomalies, and trends</li>
        </ul>
        <p><strong>2010 to 2017</strong> Research & Teaching Assistant Temple University – Philadelphia, PA, USA</p>
        <ul className="list-disc list-inside">
          <li>Gained knowledge of radiation safety procedures, standards</li>
          <li>Designed and carried out laser spectroscopy experiments such as optical-optical double resonance and Autler-Townes splitting experiments</li>
          <li>Gained extensive experience in operating, and troubleshooting various types of lasers such as tunable single longitudinal mode ring dye and Ti:Sapphire lasers, and their Diode, Argon-Ion pump lasers, Fourier Transform Interferometer (FTIR), and double grating spectrometer (SPEX 1404)</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <p>MSc In Medical Biophysics Clinical Medical Biophysics Master’s - CAMPEP Stream The University of Western Ontario – London, ON, Canada</p>
        <p>Ph.D.: Physics - Temple University - Philadelphia, PA, USA</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">PUBLICATIONS</h3>
          <p>Chen, X., Paulson, E. S., Ahunbay, E., Sanli, A., Klawikowski, S., and Li, X. A. (2019), Measurement validation of treatment planning for an MR-Linac. Journal of Applied Clinical Medical Physics, 20: 28-38 (2019)</p>
        </div>
      </div>
    </div>
  );
};

export default WorkEducation;
