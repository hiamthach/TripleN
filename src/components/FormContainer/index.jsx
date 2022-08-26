import React, { useState, useEffect } from "react";

import "./styles.scss";
import BookModal from "../BookModal";

import { Input, Select } from "antd";
const { Option } = Select;

const DateInput = () => {
  return (
    <div className="input-wrap__date">
      <input type="date" id="input-wrap__date" />
    </div>
  );
};

const SelectDayNight = ({ value, setValue }) => {
  return (
    <div className="input-wrap__day-night">
      <Select
        className="input-wrap__select"
        defaultValue="morning"
        autoFocus
        onChange={(value) => setValue(value)}
      >
        <Option value="morning">Morning</Option>
        <Option value="noon">Noon</Option>
        <Option value="afternoon">Afternoon</Option>
        <Option value="evening">Evening</Option>
      </Select>

      <div className="input-wrap__icon">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAFS0lEQVRoge1aXWscVRh+3jOpvZIiZneS1YuKHymxILVSIjTgZjZtETVYu5M0FBRRxFx5b8Co+QHeWIXe1arNbCPUItoms0kr9evCfijWTxqwxN1sgvYyYee8XuymbnazmzNzTrbS5oGFndk5z/M++87M+XgPsIFbG9RswUzK7mOJIyAwJF52p/KfNlNfNFMMAJhxGIQYgDgEDjdbv+mGASQqvt/TbPGbYfimYsPwrY7bznCL6oUf97YmhBQ9DPndgD//63oGpQovmegAFXdZm+Tkc6fn/1Jpo5Th8b2t7Za0LhHoAwHrB8+x+zXinKn4fjUqiefY/RDBZRAdDYrW5fG9re0q7ZQMy0D0AmgtH94B4FhU08Q0BPC10kcOReEoax8rxwIArcWicJT01QTaOgG+CGBTxekigEOunx8LE6wuKsxWPo5LwrIeOXBm9ue12itl2PVzPwE0iJLJZbQA+HDMiR8KE7AOMj1tadSaDQj8oopZIORYus6/WwTk065f+CIMV1h4TmwfIE7Vaoe7y0J1S2XiQ6jJtHgjDE8kkBiBplkgRLe0DNfPj3mODazINP1T73oGKJNsf5QE9zG4G+B2gO4t//gnCDmAzkkWJweys9/XFWb6G+Dlo8jvj8jTQ8+J7QOLYQhcFyRfOzBR+G1FfAB5qbY0Md4G+CE1Vv4FEMNpPzdOFe4A4ERv7EHJ4h1IbAHJ0aiP0LrMh4/3xO8XRB8B2BWR4htYGHTP5CP30/Vg3LCXiu0Gi3EAcU2qBTBcN5vPmohrGUYNjzltSQKfxsr+WgdLELTHncidNcRnzrC3x74PRXxbXs0wiQUEssudLvxugszIbIkBQoDj62AWAO6GJY6yoeQYMZxxbBfRX1AqeNxLxfebINI2XPrn6S0TwTQCSRo1waNteLy3fad6P6sBwrYTqdgOXRptw0Eg+3Q5lLVgaWtpGybCbl0OZS3mbl2OG2PpsWTbkyT4XQBb61w7Q0xD6Wzu86owElWjwHUE16xjh437RoZJ8PsNGgHAViY+skoQidpz6wWqMRw2bhPdUrPSCwBSl+C/DDO9gsaLalcB+VLtaVJaLTQDrtEKG7f26MVz7CyApC6PIrKun1darKsHA7c0fanPoQrWnkRoG5YsTupyKGtJaGtp39IMUMaJXwGoQ5drDVxx/XynLon+wANgQAzr8qwJ5tdN0BiZcpWybH8FoMsE3yoC59PZfHf1OlcUGJkeEsBBQAfBKJjgq8KCBD9vwixgsFx6cDo3A4vSAJZMcQJYIshnB7Jzf5giNFofdidyZ1lyD4A5A3QLDNqX9gtGuz3jBfH+qbnzsNAF4OvIJIzzQUCP9fu5KXORlRD5pZVx7KeYMALGdYng1eoieWkhPr6fJI2CsE2R9goRD6cn5z6p/sFLJjoggvcA3AmiEXcy91mUuCMZXqWo1nDIdyIV2xHA6iPmbjASICyXWq6BMEvM59jik+5E4WIDTR9AT/kwcqkldG1p1QoiYUujNgcmCxcAXAirtRJ0V8WLugWlojzCmg71DNcrl7LEm2F4IkHyCGrr06F3IigbblCMfqE/mz8VRjQKSnsy6SA0i/JqWx6eiD0AS/wIYHPF6f/TlodFBHK7SnVCLcOW2AlDZjMpu8/rsec8x857SfuZsO3rFOU3l2NcE0qGi4HlVwwbF6GRWRO7aStML5ZIUSgGlq/SVsnw4PTsfFFancTkSuaHNW9jI7tpXT8/hkBuJya3KK3OwenZeZV2Td8g7jn2ikmA6+ebGsNtt9dyw/Ctjg3DTYCR3bRR0XTDJnbTbmAD9fEvLXr2cfW7HkoAAAAASUVORK5CYII=" />
      </div>
    </div>
  );
};

const SelectLocation = () => {
  return (
    <div className="input-wrap__location">
      <Select className="input-wrap__select" defaultValue="all" autoFocus>
        <Option value="all">All restaurants</Option>
      </Select>

      <div className="input-wrap__icon">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAF50lEQVR4nO2aW2xURRjHf985rQUpGhDaNVwSjRCJGo2JLwIFdouABoXAbqsQgSho0AfCq9f4ojwaEzHg5Qm120rwEoh0t6zcEjTxQiSRAMF4IXsxAYVKb3s+H1oMFtSZOWdXDP0lfdnO95//fLtnzsw3AyOMMMIII1y9SDU6Sc+dWK/iN3m+NqlyG+g0RBpQ6odcnCOggHAM5YggezUo70vlSucq7a1iCVCQjnhsoXq6BuVBoM5SokeUj1SCd5LZ0qcCWgmfFUlAezyWVNHngDsikvxGRF9KZorbI9L7k0gT0DF/4rSg7G1GSESpexGdlIP1qVzpeFSCkSWgrblhmai8BVwflebfcBbhyVSm8G4UYl5YAQVpa469KCodVH7wAGNRtrU3N76iEXyBoQQUpKM59rqqPhnWiJsB2Zzsyj8VZoL0w/R/W7zxZWBDGI1QCPccuane7zjZvcddwpF0orEFeN81PkoEXZnMFre5xTrQMX/itCDwvoShhcx/z2+B6t2tXcUTtoFOk2BQ9jZz5Qwe4DpPZLNLoHUC0onY8gq+58MwPx1vWGobZJWAwdeOPm/bSdUQecH21WiVgI54bCFhl7fCblHWEvi39vjU9/jUe74/Q4V1QGcobbgz3dxwn01AjU3joY2NI3pU0LXJTGnfZf753dDf1rb4jU0iuhV0uls3shr41LS58c/lw5kTxvaO8kvY7+pA+aw26F2yNHfmjEnzbbOmjqut69kB0mTdF5wffa0/YfHHp343aWz8CPTV1czCZfDoUZvBA6zY/8Pp/t5RS4Bj9v0xuqd7YJZpY/M5wNM5DmYQdK3N4C+wYv8Pp0VknUufgchc07bGCRis5FjTmcxe9pk3IpnJ51CytnEi5l4t3gJiPSmJkraNuQTPQSPA2KtFAvQGWx+qvvO3fwHP8/daBwkTjPUtZMdaG9H+n61jhhH09f/kEGbs1SYBVakgD6dvdNllv2Ls1VxcsC9RS+0k65hh1PTXuWgYezVPgGrR1oVIebZtzHA8AheNgrm+KSLWe20VWmxjLhVx0jD2arMO+MbBSHNbIjbPIQ6A9PzYHCBuGyfIV6ZtjRMgIgdsjQya4Y1ts6aOs41LL5g8HtU3XfpUygdN2xonoMfTHGC0wRhmZ3ptXc8OmySkF0wez0DfDpRb7Puje/S1tcZrB+MEPLq70A2yy8EQIE21db2H2ptj/7pGb0vE5lHuPwTiNoEKO013gmBZDxANtqjIMntXAExT1T3peGMWj3SAt88bGPgRIKipmeIRzB6c8DQe5hhUYYtNe6vFjYK0xxsPI9xuZ6tqHE5mC3fZHJRYrbIEVDyetfdVHQSesT0lclrepuONmSuwMtyZyhas6oHgejhaw1oslptV4Gy57FY8cUpAanfhpIiuokK3NixRFXn84Vz+e5dg5+PxZKa4HWWTa3xkKJtaMnnnwkvo4/H2RMPbIKvD6LgiwnvLM4UVYY7HQ12QENDTZ4rrQIzr8BHSNaZ27Jqwl6ciKXIMnhl4OZC7o9Az4DDS15TKnP41rFDoKzIADx345SzXeAtxq+PbcpJysCCKwUNECQBI7cqXAtVFWBQjHPiFwF+UypXyUQlGlgCA1q7iiQBZTGXWCOdF9aHUnlNHoxSNNAEArdn8FxpICzAQoWxZ0UeSXUXjfb4pkScAoGVPfqeia4hmoaTAEy3Z4o4ItC4h1C2xf6LjZPfh5TePCQRxLokBiPB8Klt4NSpfl+hXSvgC6ebG11CedokVZWuyq+C0xjelIo/AXxhX2ICKyyXnTyYEhfWR+xlGxROQaqfM+ZqVIPstwj7v8Wmdl4t0Ir0sVTvu2p6YdMMAA/uAGf/YUDhOrdyb2pUvVcNXVc/7Ppg7aXLZHzgITPmbJqfKZZnpurV1ofJzwEUsy/38U+BzP3C5GyO/4QUPVHPwUOUEALTuLnwrIkuB3os+7gddnuosfV1tP1VPAAxdfYFVQAAoqo+lssWwdwT/f6QTDRvTiYaN/7WPEUa4ivkD1h7trbvNz58AAAAASUVORK5CYII="></img>
      </div>
    </div>
  );
};

const SelectAmount = () => {
  return (
    <div className="input-wrap__amount">
      <Select className="input-wrap__select" defaultValue="1" autoFocus>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
      </Select>

      <div className="input-wrap__icon">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAD00lEQVR4nO2aQWhcVRRAz30/kaSTUkEyM4kKQQgW00WsgttpRl3oRlNmEgcRtYILd4Wm4qJGN2pB6UaEgmShJGYmFV2okE7TbqQLEV0UIraglCbtTChakjS2zPzroiYqJiTz571fQ9/Zztwz993//sx99w94PB6Px+PxeDwej8fj8XjuLCTuD1SQ0r6uvWLqu0ORJIBRrda1ZXZoZv4HAY0zn9gKUMx0pgnM60AO6N7gbfMqFOuq7xZOVStx5OW8AAoylU0fUvQIkNhi2JKqvpWfqb7vekc4LcBYpqdtR7AyJjAcJV6EiaVa+8svnfn1D9u5rWJciRUkYVY+jrp4AFWeSwTXP1GHFypwJd6TTY8gHGzeJA/NPpBYLP2yfLZ51zp2F9LPn0wla3UuADstKZeoh735MwtXLPnWcHIL1Oq8gb3FA3SIMSMWfWtYL8DoKAbI2/aqMOTiu8B6AfZ827UX6LLtBbonB7ofti21XgAN6w/adq4i2HdbL0CoTq4+AEZ0ow4yutO6UNx1buqgK3SwA2TetvNvZM620XoBRM3Ptp2rGAmtu63/rChIKZu8CHKfZfVc7lTlftuHI/s7AFRFpmx7QSZdnAyddIKthneARYvKpRrhUYu+NZwUYHC6UlXVt235VDjiakDi7JipIKWB1KcIhaZEQilXrgy5Gow4mwcI6HLYfkCEicgSZXy51v6Cy6lQTCOx5EFFRoGOLYYtqvBmvlw5tq1HYv9kPJtMtaocViEP3Lv+u/QSmGJLoO8NTleqceR1W8biJx7v7K+HZjeGNAAhVwIT/rS/vPBj3GNxj+cOJ9bvgLFMT1tCbvSJCXtD1bvB7Lr1SnjNiPyuoTnf0ZY499Q3F27ElZPTAijIZDb9aIA+o/A00Ae0bBJWA84hfGXEfLH/5OXvt10fUMz13SW/LQyrygi3Ft0M54EPud56PH/20oqF9P6F1QL81fQUFDnKxg9AozKnyqGhmUr0znIdrBVgIpPuCQIdAzK2nBtwGglezJfnL9qQWSnAZDa9T9DPgKQN3xa4KqqF3Ex1ullR04ehUjb5qqAniW/xAPeoyNelgdQrzYqa2gHFbOoAcByHp8pNUERfy5erH0UVRC5AcSD5LCInmnFYIhRhMFeufBklOFLyU0909oah+Q7YFSXeAYuhmMeGy5dnGw1seOsWcwRhaIr8fxYPsNNoOH46s2mT9R8av3evJgtAf8Nx7ulfMOnnGw1qvABimpvxOUVjKIDqIw3HxIXQ8OPzCDvA6j8/bLOj0YAIO4BjwM2G49xzU+CD252Ex7PN+BN7WiDMIGphTwAAAABJRU5ErkJggg==" />
      </div>
    </div>
  );
};

const Tag = ({ active, content }) => {
  return (
    <span
      className={`form-container__tag ${
        active ? "form-container__tag--active" : ""
      }`}
    >
      {content}
    </span>
  );
};

const listMorning = ["09 : 00", "10 : 00", "11 : 00"];
const listNoon = ["12 : 00", "13 : 00", "14 : 00"];
const listAfternoon = ["15 : 00", "16 : 00", "17 : 00"];
const listEvening = ["18 : 00", "19 : 00", "20 : 00"];

const setListTag = (value) => {
  switch (value) {
    case "morning":
      return listMorning;
    case "noon":
      return listNoon;
    case "afternoon":
      return listAfternoon;
    case "evening":
      return listEvening;
  }
};

const FormContainer = ({ isBook, setVisible }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [daynight, setDayNight] = useState("morning");

  const handleFindTable = () => {
    setStep(2);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    setStep(1);
  }, []);

  return (
    <div className={`form-container ${isBook && "form-container__book"}`}>
      {isBook ? (
        <>
          {step === 1 && (
            <>
              <div className="form-container__book--row">
                <SelectLocation />
              </div>
              <div className="form-container__book--row">
                <div className="form-container__book--col-7">
                  <DateInput />
                </div>
                <div className="form-container__book--col-3">
                  <SelectAmount />
                </div>
              </div>
              <div className="form-container__book--row">
                <div className="form-container__book--col-7">
                  <SelectDayNight value={daynight} setValue={setDayNight} />
                </div>
                <div
                  className="form-container__book--col-3"
                  onClick={handleFindTable}
                >
                  <div className="form-container__book--btn">Find table</div>
                </div>
              </div>
              <div className="form-container__book--tag-list">
                {setListTag(daynight).map((item) => (
                  <Tag content={item} />
                ))}
              </div>

              <div className="form-container__book--note">
                <span>Press ESC to cancel</span>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div
                className="form-container__book--back"
                onClick={() => {
                  setStep(1);
                }}
              >
                <i className="fa-solid fa-angle-left"></i>
                <span>Back</span>
              </div>
              <div className="form-container__book--row">
                <div className="input-wrap__input">
                  <input type="text" placeholder="Your name" />

                  <div className="input-wrap__icon">
                    <i className="fa-solid fa-pen"></i>
                  </div>
                </div>
              </div>

              <div className="form-container__book--row">
                <div className="input-wrap__input">
                  <input type="text" placeholder="0909 876 543" />

                  <div className="input-wrap__icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                </div>
              </div>
              <div
                className="form-container__book--row-btn"
                onClick={() => {
                  setStep(3);
                }}
              >
                <div className="form-container__book--btn-2">Book</div>
              </div>
              <div className="form-container__book--note">
                <span>Press ESC to cancel</span>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="form-container__book--success">
                <div className="form-container__book--success-icon">
                  <i className="fa-solid fa-check"></i>
                </div>

                <h1>Successful!</h1>
                <h6>Your table has been reserved!</h6>
                <h6>Please wait for our confirmation call.</h6>

                <div
                  className="form-container__book--row-btn"
                  onClick={() => {
                    setVisible(false);
                    setStep(1);
                  }}
                  style={{ marginTop: "24px", marginBottom: "-30px" }}
                >
                  <div className="form-container__book--btn-2">Got it!</div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <DateInput />
          <SelectDayNight />

          <button className="form-container__btn" onClick={openModal}>
            Book
          </button>
        </>
      )}

      <BookModal isVisible={modalVisible} setVisible={setModalVisible} />
    </div>
  );
};

export default FormContainer;
