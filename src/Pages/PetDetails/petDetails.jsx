/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomIcons from '../../utils/icons';
import CustomTypography from '../../Components/Typography/Typography';
import './astrologers.css';
import { AstroProfileEntries, AstroLoginDefaultValues } from './AstroProfileEntries';
import CustomForm from '../../Components/CustomForm/customForm';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { CREATE_ASTROLOGER_COST, GET_ALL_ASTROLOGER_TYPE_DATA } from '../../constants/redux-actionTypes';


function PetDetails() {
  const [values, setValues] = React.useState([]);
  const [logoImage, setLogoImage] = useState(null);
  const [profile, setProfile] = useState('');
  const [customFormData, setCustomFormData] = useState();
  const dispatch = useDispatch();
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      test: [{ firstName: 'Bill', lastName: 'Luo' }],
    },
  });

  const { creatAstrologer, createPurohit, getAllAstrologerTypeWebsite } = useSelector((state) => state.createReducer);
  const navigate = useNavigate();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'test',
  });
  /**
   *
   * @param {*} e
   * @param {*} value
   */
  const handleDelete = (e, value) => {
    e.preventDefault();
    setValues(values.filter((name) => name !== value));
  };
  /**
   *
   * @param {*} data
   */
  const onSelectValue = (data) => {
    setValues(data);
  };
  /**
   *
   * @param {*} value
   */
  const getImage = (value) => {
    setLogoImage(value);
  };
  const onChangeRadioAction = (e) => {
    setProfile(e.target.value);
  };

  const getCustomFormData = (data) => {
    setCustomFormData(data);
    dispatch({ type: CREATE_ASTROLOGER_COST, payload: data });
  };
  /**
   *
   * @param {*} data
   */
  const onReceiveData = (data) => {
    dispatch({ type: CREATE_ASTROLOGER_COST, payload: customFormData });
    dispatch({ type: GET_ALL_ASTROLOGER_TYPE_DATA });
    navigate('/astro-webadmin/astrologers');
  };

  return (
    <Grid className="mainGrid">
      <Grid container item md={12} sm={12} xs={12} className="purohitProfile">
        <CustomTypography type="header" text="Create Astrologer/Purohit Profile" customClass="userHeader" />
        <NavLink to="/astro-webadmin/astrologers">
          <img src={CustomIcons.MinIcon} alt="" />
        </NavLink>
      </Grid>
      <Grid item md={12} sm={12} xs={12} pt={3}>
        <CustomForm
          onReceiveData={onReceiveData}
          AllEntries={AstroProfileEntries}
          onChangeRadioAction={(e) => onChangeRadioAction(e)}
          customFormData={(data) => getCustomFormData(data)}
          defaultValues={AstroLoginDefaultValues}
        />
      </Grid>
    </Grid>
  );
}
export default PetDetails;
