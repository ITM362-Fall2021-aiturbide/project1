function validate_form ( )
{
    valid = true;

    if (.input == "" )
    {
        alert ( "Please fill in the 'Your Name' box." );
        valid = false;
    }

    return valid;
}
