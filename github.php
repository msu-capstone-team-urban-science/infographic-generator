<?php
$output = shell_exec("C:\cygwin\bin\bash -li /cygdrive/c/Users/Administrator/asdf.sh");
echo "<pre>$output</pre>";
print_r(shell_exec('dir'));
echo 'done';
?>