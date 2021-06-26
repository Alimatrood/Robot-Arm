
CREATE TABLE `motors` (
  `id` int(11) NOT NULL,
  `Motor1` int(11) NOT NULL,
  `Motor2` int(11) NOT NULL,
  `Motor3` int(11) NOT NULL,
  `Motor4` int(11) NOT NULL,
  `Motor5` int(11) NOT NULL,
  `Motor6` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `powering` (
  `id` int(11) NOT NULL,
  `Powered` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `motors`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `powering`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `motors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `powering`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

