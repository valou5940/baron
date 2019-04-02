


<form className="feedback-form" onSubmit={handleSubmit}>
<h1>Your Feedback</h1>
  <textarea
    className="text-input"
    id="feedback-entry"
    name="feedback-entry"
    onChange={handleChange}
    placeholder="Enter your feedback here"
    required
    value={feedback}
  />
  <div className="btn-group">
    <button className="btn btn--cancel" onClick={handleClose}>
      Cancel
    </button>
    <input type="submit" value="Submit" className="btn btn--submit" />
  </div>
</form>