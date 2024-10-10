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

export default function SkillsAndTrainings({ formData, updateFormData }) {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/summaryinfo');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} sx={{ textAlign: "left" }}>
        <FormGrid size={{ xs: 12 }}>
          <h1>Skills and Trainings</h1>
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 12 }}>
          <h2>Skills (Max of 3)</h2>
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="skill1" required>
            Skill 1
          </FormLabel>
          <OutlinedInput
            id="skill1"
            name="skill1"
            type="text"
            placeholder="Skill 1"
            required
            size="small"
            value={formData.skill1 || ""}
            onChange={handleInputChange}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="skill2" required>
            Skill 2
          </FormLabel>

          <OutlinedInput
            id="skill2"
            name="skill2"
            type="name"
            placeholder="Skill 2"
            required
            size="small"
            value={formData.skill2 || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="skill3" required>
            Skill 3
          </FormLabel>

          <OutlinedInput
            id="skill3"
            name="skill3"
            type="text"
            placeholder="Skill 3"
            required
            size="small"
            value={formData.skill3 || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 12, md: 12 }}>
          <h2>Trainings (Max of 3)</h2>
        </FormGrid>

        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="training1" required>
            Training 1
          </FormLabel>

          <OutlinedInput
            id="training1"
            name="training1"
            type="text"
            placeholder="Training 1"
            required
            size="small"
            value={formData.training1 || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="training2" required>
            Training 2
          </FormLabel>

          <OutlinedInput
            id="training2"
            name="training2"
            type="name"
            placeholder="Training 2"
            required
            size="small"
            value={formData.training2 || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="training3" required>
            Training 3
          </FormLabel>

          <OutlinedInput
            id="training3"
            name="training3"
            type="text"
            placeholder="Training 3"
            required
            size="small"
            value={formData.training3 || ""}
            onChange={handleInputChange}
          />
        </FormGrid>
      </Grid>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <Button variant="text" onClick={() => navigate("/educbg")}>
          Previous
        </Button>
        <Button type="submit" variant="contained">
          Next
        </Button>
      </Box>
    </form>
  );
}