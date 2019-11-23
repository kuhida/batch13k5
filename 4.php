<?php
function abbreviate ($input_string) 
{
    $input = explode(" ", $input_string);
    $abbrev = '';
    foreach ($input AS $key => $input_masukan) {
        preg_match("/^([A-Z]+)/", $input_masukan, $cocok);
        $abbr = (isset($cocok[0])) ? $abbrev.$cocok[0] : $abbrev;
    }
    return $abbrev;
}

?>