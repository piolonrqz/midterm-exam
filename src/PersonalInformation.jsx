import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function PersonalInformation({ formData, updateFormData }) {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/educbg');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} sx={{ textAlign: "left" }}>
        <FormGrid size={{ xs: 12 }}>
          <h1>Personal Information</h1>
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="first-name" required>
            First name
          </FormLabel>
          <OutlinedInput
            id="first-name"
            name="firstName"
            type="text"
            placeholder="Eugene"
            required
            size="small"
            value={formData.firstName || ""}
            onChange={handleInputChange}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="last-name" required>
            Last name
          </FormLabel>

          <OutlinedInput
            id="last-name"
            name="lastName"
            type="last-name"
            placeholder="Busico"
            required
            size="small"
            value={formData.lastName || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="last-name" required>
            Gender
          </FormLabel>

          <RadioGroup
            sx={{ marginLeft: "2rem" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="radioButtons"
            value={formData.radioButtons || ""}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />

            <FormControlLabel value="male" control={<Radio />} label="Male" />

            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

        </FormGrid>

        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="birthday" required>
            Birthday
          </FormLabel>

          <OutlinedInput
            id="birthday"
            name="birthday"
            type="date"
            placeholder="mm/dd/yyyy"
            required
            size="small"
            value={formData.birthday || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="address1" required>
            Address
          </FormLabel>

          <OutlinedInput
            id="address1"
            name="address1"
            type="address1"
            placeholder="Street/Sitio and Number"
            required
            size="small"
            value={formData.address1 || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="city" required>
            City
          </FormLabel>

          <OutlinedInput
            id="city"
            name="city"
            type="city"
            placeholder="Cebu"
            required
            size="small"
            value={formData.city || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="province" required>
            Province
          </FormLabel>

          <OutlinedInput
            id="province"
            name="province"
            type="province"
            placeholder="Cebu"
            required
            size="small"
            value={formData.province || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="zip" required>
            Zip / Postal code
          </FormLabel>

          <OutlinedInput
            id="zip"
            name="zip"
            type="zip"
            placeholder="6000"
            required
            size="small"
            value={formData.zip || ""}
            onChange={handleInputChange}
          />
        </FormGrid>

        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="country" required>
            Country
          </FormLabel>

          <OutlinedInput
            id="country"
            name="country"
            type="country"
            placeholder="Philippines"
            required
            size="small"
            value={formData.country || ""}
            onChange={handleInputChange}
          />
        </FormGrid>
      </Grid>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button type="submit" variant="contained">
          Next
        </Button>
      </Box>
    </form>
  );
}