import React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function EducationalBackground({ formData, updateFormData }) {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/skilltr');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} sx={{ textAlign: "left" }}>
        <FormGrid size={{ xs: 12 }}>
          <h1>Educational Background</h1>
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 12 }}>
          <h2>Elementary</h2>
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="elementary" required>
            School Name
          </FormLabel>
          <OutlinedInput
            id="elementary"
            name="elementarySchool"
            type="text"
            placeholder="School Name"
            required
            size="small"
            value={formData.elementarySchool || ""}
            onChange={handleInputChange}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="elem-address" required>
            Address
          </FormLabel>

          <OutlinedInput
            id="elem-address"
            name="elemAddress"
            type="text"
            placeholder="Address"
            required
            size="small"
            value={formData.elemAddress || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 12, md: 12 }}>
          <h2>High School</h2>
        </FormGrid>

        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="high-school" required>
            School Name
          </FormLabel>

          <OutlinedInput
            id="high-school"
            name="highSchool"
            type="text"
            placeholder="School Name"
            required
            size="small"
            value={formData.highSchool || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="hs-address" required>
            Address
          </FormLabel>

          <OutlinedInput
            id="hs-address"
            name="hsAddress"
            type="text"
            placeholder="Address"
            required
            size="small"
            value={formData.hsAddress || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 12, md: 12 }}>
          <h2>College</h2>
        </FormGrid>

        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="college" required>
            School Name
          </FormLabel>

          <OutlinedInput
            id="college"
            name="college"
            type="text"
            placeholder="School Name"
            required
            size="small"
            value={formData.college || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="college-address" required>
            Address
          </FormLabel>

          <OutlinedInput
            id="college-address"
            name="collegeAddress"
            type="text"
            placeholder="Address"
            required
            size="small"
            value={formData.collegeAddress || ""}
            onChange={handleInputChange}
          />
        </FormGrid>
      </Grid>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <Button variant="text" onClick={() => navigate("/perinfo")}>
          Previous
        </Button>
        <Button type="submit" variant="contained">
          Next
        </Button>
      </Box>
    </form>
  );
}