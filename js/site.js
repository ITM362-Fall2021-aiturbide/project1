function validate_form ()
{
    valid = true;

    if (document.getElementById('input').value == "" )
    {
        alert ( "Please fill in the 'Your Name' box." );
        valid = false;
    }

    return valid;
}
