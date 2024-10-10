import React from 'react';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const SummaryItem = ({ label, value }) => (
  <FormGrid size={{ xs: 12 }}>
    <strong>{label}:</strong> {value}
  </FormGrid>
);

export default function SummaryInfo({ formData }) {
  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={3} sx={{ textAlign: 'left' }}>
        <FormGrid size={{ xs: 12, md: 12 }}><h2>Personal Information</h2></FormGrid>
        <SummaryItem label="First Name" value={formData.personalInfo.firstName} />
        <SummaryItem label="Last Name" value={formData.personalInfo.lastName} />
        <SummaryItem label="Gender" value={formData.personalInfo.gender} />
        <SummaryItem label="Birthday" value={formData.personalInfo.birthday} />
        <SummaryItem label="Address" value={formData.personalInfo.address1} />
        <SummaryItem label="City" value={formData.personalInfo.city} />
        <SummaryItem label="Province" value={formData.personalInfo.province} />
        <SummaryItem label="Zip / Postal code" value={formData.personalInfo.zip} />
        <SummaryItem label="Country" value={formData.personalInfo.country} />
        {/* Add other personal information fields */}

        <FormGrid size={{ xs: 12, md: 12 }}><h2>Educational Background</h2></FormGrid>
        <SummaryItem label="Elementary School" value={formData.educationalBackground.elementarySchool} />
        <SummaryItem label="Elementary School Address" value={formData.educationalBackground.elemAddress} />
        <SummaryItem label="High School" value={formData.educationalBackground.highSchool} />
        <SummaryItem label="High School Address" value={formData.educationalBackground.hsAddress} />
        <SummaryItem label="College" value={formData.educationalBackground.college} />
        <SummaryItem label="College Address" value={formData.educationalBackground.collegeAddress} />
        {/* Add other educational background fields */}

        <FormGrid size={{ xs: 12, md: 12 }}><h2>Skills and Training</h2></FormGrid>
        <SummaryItem label="Skill 1" value={formData.skillsAndTrainings.skill1} />
        <SummaryItem label="Skill 2" value={formData.skillsAndTrainings.skill2} />
        <SummaryItem label="Skill 3" value={formData.skillsAndTrainings.skill3} />
        <SummaryItem label="Training 1" value={formData.skillsAndTrainings.training1} />
        <SummaryItem label="Training 2" value={formData.skillsAndTrainings.training2} />
        <SummaryItem label="Training 3" value={formData.skillsAndTrainings.training3} />
        {/* Add other skills and training fields */}
      </Grid>

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-start' }}>
        <Button variant="text" onClick={() => navigate('/skilltr')}>Previous</Button>
      </Box>
    </>
  );
}