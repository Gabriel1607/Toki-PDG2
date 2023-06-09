<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>

    <!--Font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!--Styles-->
    <link rel="stylesheet" href="/register2.css">
</head>

<body>    
    <section class="register">
        <img src="/logo.png" class="register__image">
        <div class="register__container">
            <div class="register__head flex">
                <a href="/register.html">
                    <img src="/backicon.png" alt="back" class="back__icon">
                </a>
                <h2 class="register__tittle">Registrarme</h2>
            </div>
            <h3 class="register__tittle">Paso 2</h3>
            <p>Ahora unos daticos académicos:</p>
            <form id="registerUserForm2">
            <div class="register__semester">
                    <select form="registerUserForm2" class="register__select" id="semester"> 
                        <option value="">Elige tu semestre</option>
                        <option value="4">4to semestre</option>
                        <option value="5">5to semestre</option>
                    </select>
            </div>
            <div class="register__asignature">
                <p>Ahora vas a seleccionar las materias que has visto y registrar su nota.</p>
                <p>Si has visto la materia varias veces, coloca la nota más reciente.</p>
                <div class="register__important">
                    <p class="register__psmall">Tranqui, para que el proceso sea más fácil, hemos preparado una guía que te indicará como descargar tus notas desde Banner. Puedes verla 
                        <a href="https://drive.google.com/file/d/1NrucG7e8fNmfuNzoCcCwa2qATIpsmEQ4/view?usp=sharing" target="_blank">aquí</a></p>
                </div>
                <button type="button" class="collapsible">Primer semestre</button>
                <div class="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Aprobada</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="materia">Comunicación escrita I</td> 
                                <td><input type="checkbox" name="coe1_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Lógica y argumentación</td>
                                <td><input type="checkbox" name="logica_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Álgebra y funciones</td>
                                <td><input type="checkbox" name="algebra_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Introducción al diseño</td>
                                <td><input type="checkbox" name="intro_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Diseño bidimensional</td>
                                <td><input type="checkbox" name="bi_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  
                </div>
                <button type="button" class="collapsible">Segundo semestre</button>
                <div class="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Aprobada</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="materia">Comunicación escrita II</td> 
                                <td><input type="checkbox" name="coe2_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Matemáticas para el Diseño</td>
                                <td><input type="checkbox" name="mate_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Diseño tridimensional</td>
                                <td><input type="checkbox" name="tri_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Teoría del color</td>
                                <td><input type="checkbox" name="color_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Organizaciones</td>
                                <td><input type="checkbox" name="orga_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  
                </div>
                <button type="button" class="collapsible">Tercer semestre</button>
                <div class="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Aprobada</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="materia">Fundamentos de Program...</td> 
                                <td><input type="checkbox" name="fundaprogra_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Diseño de Sonido</td>
                                <td><input type="checkbox" name="sonido_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Diagramación y Tipografía</td>
                                <td><input type="checkbox" name="dyt_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Fotografía</td>
                                <td><input type="checkbox" name="fotografia_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Diseño y Sociedad</td>
                                <td><input type="checkbox" name="dys_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Electiva en Ciencias Naturales I</td>
                                <td><input type="checkbox" name="ecn1_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  
                </div>
                <button type="button" class="collapsible">Cuarto semestre</button>
                <div class="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Aprobada</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="materia">Diseñando con Algoritmos</td> 
                                <td><input type="checkbox" name="algo_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Diseño 4D</td>
                                <td><input type="checkbox" name="4d_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Historia del Diseño y la com...</td>
                                <td><input type="checkbox" name="historia_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Narración hipermedia</td>
                                <td><input type="checkbox" name="narracion_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Proyecto integrador I</td>
                                <td><input type="checkbox" name="pi1_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Principios de Economía</td>
                                <td><input type="checkbox" name="econo_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  
                </div>
                <button type="button" class="collapsible">Quinto semestre</button>
                <div class="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Aprobada</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Estadística y Probabilidad...</td> 
                                <td class="materia"><input type="checkbox" name="estadi_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Arquitectura de la información</td>
                                <td><input type="checkbox" name="arqui_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Percepción y Cognición</td>
                                <td><input type="checkbox" name="percep_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Ecosistemas de aplicaciones</td>
                                <td><input type="checkbox" name="eco_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Competencias Administra...</td>
                                <td><input type="checkbox" name="cab_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Electiva en Ciencias Naturales II</td>
                                <td><input type="checkbox" name="ecn2_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  
                </div>
                <button type="button" class="collapsible">Sexto semestre</button>
                <div class="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Aprobada</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="materia">Programación Web</td> 
                                <td><input type="checkbox" name="web_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Arte y tecnología</td>
                                <td><input type="checkbox" name="ayt_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Interacción Hombre-Com...</td>
                                <td><input type="checkbox" name="hci_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Investigación en Diseño</td>
                                <td><input type="checkbox" name="inves_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Electiva en Ciencia, tecno...</td>
                                <td><input type="checkbox" name="cts_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Electiva en Humanidades ... I</td>
                                <td><input type="checkbox" name="hum1_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  
                </div>
                <button type="button" class="collapsible">Séptimo semestre</button>
                <div class="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Aprobada</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="materia">Interacción Sociotecnológica</td> 
                                <td><input type="checkbox" name="socio_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Proyecto Integrador II</td>
                                <td><input type="checkbox" name="pi2_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Profesional electiva I</td>
                                <td><input type="checkbox" name="profe1_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Espíritu empresarial de base...</td>
                                <td><input type="checkbox" name="espiritu_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Liderazgo</td>
                                <td><input type="checkbox" name="lider_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Electiva en Humanidades ... II</td>
                                <td><input type="checkbox" name="hum2_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  
                </div>
                <button type="button" class="collapsible">Octavo semestre</button>
                <div class="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Aprobada</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="materia">Proyecto de Grado I</td> 
                                <td><input type="checkbox" name="pdg1_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Profesional electiva II</td>
                                <td><input type="checkbox" name="profe2_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Gestión de Proyectos</td>
                                <td><input type="checkbox" name="gestion_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Plan de Negocio de base...</td>
                                <td><input type="checkbox" name="hum3_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Electiva en Humanidades ... III</td>
                                <td><input type="checkbox" name="bi_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  
                </div>
                <button type="button" class="collapsible">Noveno semestre</button>
                <div class="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Aprobada</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="materia">Proyecto de Grado II</td> 
                                <td><input type="checkbox" name="pdg2_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Profesional electiva III</td>
                                <td><input type="checkbox" name="profe3_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Fundamentos de Derecho...</td>
                                <td><input type="checkbox" name="derecho_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Electiva en Ética</td>
                                <td><input type="checkbox" name="etica_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Electiva en Humanidades ... IV</td>
                                <td><input type="checkbox" name="hum4_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  
                </div>
                <button type="button" class="collapsible">Décimo semestre</button>
                <div class="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Aprobada</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="materia">Práctica Empresarial</td> 
                                <td><input type="checkbox" name="practica_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                            <tr>
                                <td class="materia">Fundamentos jurídicos de...</td> 
                                <td><input type="checkbox" name="propiedad_check" value="1" class="check"></td>
                                <td>
                                    <input type="number" min="1" max="5" step="0.1" placeholder="Nota" class="nota">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
                <input type="submit" value="Siguiente" class="register__submit">
        </div>
    </form> 
        
        </div>
    </section>
    <script src="/home.js" defer=""></script>
</body></html>